import jobdetails from '../asset/images/jobdetails.jpg'
import jobdetailsfield from '../components/jobdetailsfield';
import happy from '../asset/images/happy.png'
import { useState } from 'react';
import { supabase } from '../Api';
import '../styles/index.css';  // Import centralized CSS first
import '../styles/postjob.css'
function PostJob() {
    const [formData, setFormData] = useState({
        role: '',
        experience: '',
        description: '',
        contact: '',
        summary: ''
    });

    const [message, setMessage] = useState('');
    const [check, setCheck] = useState(true);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { error } = await supabase
            .from('postjob')
            .insert([formData]);

        if (error) {
            console.error('Insert error:', error);
            setMessage('Failed to post job: ' + error.message);
        } else {
            setMessage('Job posted successfully!');
            setCheck(false)
            setFormData({
                role: '',
                experience: '',
                description: '',
                contact: '',
                summary: ''
            });
        }
    };

    return (
        <div className='jobform-overall'>
            <header className="jobform-header">
                <a href='/landingpage' onClick={() => { setCheck(true) }}>Home</a>
                <h1 className="text-center px-3">Post your requirement</h1>
            </header>
            <img className='jobdetailsbackground' src={jobdetails} />

            <div className='jobform-container'>
                {!check ?
                    <div className="completion-section">
                        <img src={happy} alt="Success" />
                        <div className={`message ${message.includes('successfully') ? 'success' : 'error'}`}>
                            {message}
                        </div>
                        <div className="completion-buttons">
                            <button className="post-btn" onClick={() => { setCheck(true) }}>Post Another Job</button>
                        </div>
                    </div>
                    :
                    <form onSubmit={handleSubmit}>

                        <div className="form-grid">
                            {jobdetailsfield.map((input) => (
                                <div key={input.name} className="form-group" >
                                    <label htmlFor={input.name}>{input.label}</label>
                                    {input.type === "textarea" ? (
                                        <textarea
                                            name={input.name}
                                            placeholder={input.placeholder}
                                            required={input.required}
                                            rows={input.rows || 4}
                                            value={formData[input.name]}
                                            onChange={handleChange} />
                                    ) : (
                                        <input
                                            type={input.type}
                                            name={input.name}
                                            placeholder={input.placeholder}
                                            required={input.required}
                                            min={input.min}
                                            max={input.max}
                                            value={formData[input.name]}
                                            onChange={handleChange} />
                                    )}
                                </div>
                            ))}
                        </div>
                        <button type="submit">Post Job</button>

                    </form>
                }
            </div>
        </div>
    );
}

export default PostJob;