import home from '../asset/images/home.png';
import { useState } from 'react';
import { supabase } from '../Api';
import bcrypt from 'bcryptjs';
import '../styles/index.css';  // Import centralized CSS first
import '../styles/login.css';

function Register() {
  const [pwd1, setPwd1] = useState('');
  const [pwd2, setPwd2] = useState('');
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();

    if (pwd1 !== pwd2) {
      setMessage('Passwords do not match.');
      setSuccess(false);
      return;
    }

    if (username.length < 1 || pwd1.length < 3) {
      setMessage('Username and password must be at least 3 characters.');
      setSuccess(false);
      return;
    }

    const hashedPassword = bcrypt.hashSync(pwd1, 10);

    const { data, error } = await supabase
      .from('registration')
      .insert([{ username, password: hashedPassword }]);

    if (error) {
      console.error(error);
      setMessage('Registration failed: ' + error.message);
      setSuccess(false);
    } else {
      setMessage('User registered successfully!');
      setSuccess(true);
    }
  };

  return (
    <div className="overallcontainer">
      <div className="backgroundimage-login">
        <img src={home} alt="background" />
      </div>
      <div className="layout">
        <form className="loginform" onSubmit={handleRegister}>
          {!success && (
            <>
              <h2>Register</h2>
              <p>(*) fields are required</p>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="*Username"
              />
              <input
                type="password"
                value={pwd1}
                onChange={(e) => setPwd1(e.target.value)}
                placeholder="*Password (min 3 characters)"
              />
              <input
                type="password"
                value={pwd2}
                onChange={(e) => setPwd2(e.target.value)}
                placeholder="*Re-enter Password"
              />
              <button type="submit">Register</button>
            </>
          )}

          {message && (
            <div className={`message ${success ? 'success' : 'error'}`}>
              {message} {success && <a href="/">kick to login</a>}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default Register;
