import React, { useState } from 'react';
import './register.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

function Register() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

  };

  const handleGoogleSignIn = () => {

  };

  return (
    <div className="container">
      <div className="left-side">
        <h1>Smart Learning Path</h1>
        {/* Add 3D object illustrations here */}
      </div>
      <div className="right-side">
        <div className="language-select-top">
          <select className="select-language">
            <option value="en-UK">English (UK)</option>
            {/* Add more language options here */}
          </select>
        </div>
        <div className="google-signin">
          <button onClick={handleGoogleSignIn} className="google-button">
            <FontAwesomeIcon icon={faGoogle} className="google-icon" /> Continue with Google
          </button>
        </div>
        <div className="divider-container">
          <hr className="divider" />
          <span className="divider-label">or</span>
          <hr className="divider" />
        </div>
        <h1>Create Account</h1>
        <form onSubmit={handleSubmit} className="form">
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              className="input-field"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="input-field"
            />
          </div>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="input-field"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="input-field"
            />
          </div>
          <button type="submit" className="submit-button">Create Account</button>
          <p>
            Already have an account? <a href="/login">Log in</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;