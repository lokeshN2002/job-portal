import { useState, useEffect } from 'react';
import card1 from '../asset/images/card1.jpeg';
import card2 from '../asset/images/card2.jpeg';
import landingpage from '../asset/images/landingpage.jpeg';
import '../styles/index.css';  // Import centralized CSS first
import '../styles/landingpage.css';


function Landingpage() {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [imageError, setImageError] = useState(false);

    useEffect(() => {
        // Preload the background image
        const img = new Image();

        img.onload = () => {
            // Small delay to ensure smooth transition
            setTimeout(() => {
                setImageLoaded(true);
            }, 25);
        };

        img.onerror = () => {
            setImageError(true);
            setImageLoaded(true); // Still show the gradient background
        };

        // Set high priority for loading
        img.loading = 'eager';
        img.src = landingpage;

        // Cleanup
        return () => {
            img.onload = null;
            img.onerror = null;
        };
    }, []);

    return (
        <div className="container d-flex justify-content-center align-items-center">
            <div className='backgroundimage'>
                {!imageError && (
                    <img
                        src={landingpage}
                        className={imageLoaded ? 'loaded' : ''}
                        alt="Background"
                        loading="eager"
                        onLoad={() => setImageLoaded(true)}
                        onError={() => setImageError(true)}
                    />
                )}
            </div>
            <div className="card glass-card gpu-accelerated">
                <img src={card1} className="card-img-top transition-transform" alt="..." />
                <div className="card-body">
                    <h5 className="card-title text-center font-heading text-gradient-primary">Get Job</h5>
                    <p className="card-text font-primary">Simplify your job search with a dedicated space to manage applications, monitor progress,
                        and stay on top of every opportunity. Designed to keep your career goals in focus.</p>
                    <div className="d-flex justify-content-center">
                        <a href="/getjob" className="btn btn-primary px-5 hover-lift">Get Job</a>
                    </div>
                </div>
            </div>

            <div className="card glass-card gpu-accelerated">
                <img src={card2} className="card-img-top transition-transform" alt="..." />
                <div className="card-body">
                    <h5 className="card-title text-center font-heading text-gradient-primary">Post Job</h5>
                    <p className="card-text font-primary">Reach the right candidates faster with a simple and efficient job posting system. Manage listings,
                        track applications, and connect with top talent—all in one place.</p>
                    <div className="d-flex justify-content-center">
                        <a href="/postjob" className="btn btn-primary px-5 hover-lift">Post Job</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landingpage;