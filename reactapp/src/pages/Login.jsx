import home from '../asset/images/home.png';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { supabase } from '../Api';
import bcrypt from 'bcryptjs';
import '../styles/index.css';
import '../styles/login.css';

function Login() {
    const [username, setUsername] = useState('');
    const [pwd, setPwd] = useState('');
    const [message, setMessage] = useState('');
    const [loginSuccess, setLoginSuccess] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        const { data, error } = await supabase
            .from('registration')
            .select('*')
            .eq('username', username)
            .single();

        if (error || !data) {
            setMessage('User not found or error occurred.');
            setLoginSuccess(false);
            return;
        }

        const isPasswordCorrect = bcrypt.compareSync(pwd, data.password);

        if (isPasswordCorrect) {
            setLoginSuccess(true);
            setMessage('Login successful!');
            navigate('/landingpage');
        } else {
            setLoginSuccess(false);
            setMessage('Incorrect password.');
        }
    };

    return (
        <div className='overallcontainer'>
            <div className='backgroundimage-login'>
                <img src={home} />
            </div>
            <div className='layout glass-card gpu-accelerated'>
                <form className="loginform" onSubmit={handleLogin}>
                    <h2 className="font-heading text-gradient-primary">Login</h2>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        className="form-input"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={pwd}
                        onChange={(e) => setPwd(e.target.value)}
                        required
                        className="form-input"
                    />
                    <button type="submit" className="btn-primary">Log In</button>

                    {message && (
                        <p className={`message ${loginSuccess ? 'success' : 'error'}`}>{message}</p>
                    )}

                    <p>
                        Don't have an account? Click here to{' '}
                        <a href="/register">Register</a>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default Login;
