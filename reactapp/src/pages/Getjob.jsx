import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react'
import { fetchJobs } from "../Api";
import getjob from '../asset/images/getjob.png';
import locationicon from '../asset/icons/locationicon.png'
import yearicon from '../asset/icons/yearicon.png'
import '../styles/index.css';  
import '../styles/getjob.css'

function Getjob() {

    const navigate = useNavigate();
    const [Data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    //filering the joblist which cross the deadline
    const date = new Date().toISOString().split('T')[0];
    const joblist = Data.filter((input) => input.deadline >= date)

    useEffect(() => {
        const fetch = async () => {
            setIsLoading(true)
            const data = await fetchJobs();
            if (data) {
                setData(data)
            }
            // small delay is place here to make the ui animation looks better
            setTimeout(() => {
                setIsLoading(false)
            }, 25)
        }
        fetch()
    }, [])


    return (
        <div className="overall">
            <div className='background'>
                <img src={getjob} />
            </div >
            <div className="content">
                <header className="header">
                    <a href='/landingpage'>Home</a>
                    <h1 className="text-center px-3">List of Job's</h1>
                </header>

                <div className="job-cards-container">
                    {isLoading ? (
                        // this will make the loading page ui looks bettter
                        Array.from({ length: 4 }).map((_, index) => (
                            <div key={`loading-${index}`} className="job-card loading-card">
                                <div className="loading-content">
                                    <div className="loading-title"></div>
                                    <div className="loading-text"></div>
                                    <div className="loading-text"></div>
                                </div>
                            </div>
                        ))
                    ) : (
                        joblist.map((input, index) => (
                            <div
                                key={input.id}
                                className="job-card"
                                style={{ animationDelay: `${index * 0.1}s` }}
                                onClick={() => { navigate('/jobdetails/' + input.id) }}>
                                <h4>{input.role}</h4>
                                <p>{input.description}</p>
                                <ul>
                                    <p> <img src={locationicon} alt="Location" className="icon" /> {input.location}</p>
                                    <p> <img src={yearicon} alt="Location" className="icon" />Apply before : {input.deadline}</p>
                                </ul>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div >
    )
}

export default Getjob;