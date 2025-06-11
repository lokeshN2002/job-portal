import jobdetailsfield from "../components/jobdetailsfield";
import jobdetails from '../asset/images/jobdetails.jpg'
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { fetchJobs } from "../Api";
import '../styles/index.css';  
import '../styles/jobdetail.css'


function Jobdetails() {

    const { id } = useParams();
    const [joblist, setJoblist] = useState([])
    useEffect(() => {
        const fetch = async () => {
            const data = await fetchJobs();
            if (data) {
                setJoblist(data);
            }
        }
        fetch()
    }, [])
    const select = joblist.find(job => job.id === parseInt(id));

    if (!select) {
        return <div></div>;
    }

    return (
        <div className='jobdetails-overall'>
            <header className="jobdetails-header">
                <a href='/landingpage'>Home</a>
                <a className='backbutton' href='/getjob'>Back</a>
                <h1 className="text-center px-3">{select.role} role</h1>
            </header>
            <img className='jobdetailsbackground' src={jobdetails} />

            <div className='jobdetails-container'>

                <div className='jobdetails'>
                    {jobdetailsfield.map(({ label, name }) => {
                        const value = select[name];
                        return value ? (
                            <p key={name}>
                                <strong>{label} :</strong> {value}
                            </p>
                        ) : null;
                    })}
                </div>
            </div>

        </div>
    )
}

export default Jobdetails;