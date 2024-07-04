import React, { useState } from 'react';
import './login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import client from "../../utils/supabaseClient.js"
import { toast } from 'react-toastify';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleGoogleLogin = async () => {
    console.log("first")
    try {
      // const {data,error} = await client.auth.signInWithOAuth({
      //   provider:'google',
      //   options:{
      //     redirectTo:"/"
      //   }
      // });
      // if(error)throw error
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Fetch the data from user auth table.
  };

  return (
    <div className="container">
      <h1>Smart Learning Path</h1>
      <form>
        <div className="form-group">
          <button className="google-btn" onClick={handleGoogleLogin}>
            <FontAwesomeIcon icon={faGoogle} className="icon" /> Sign in with Google
          </button>
        </div>

        <hr className="divider" />

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <div className="input-icon">
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="john@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <div className="input-icon">
            <FontAwesomeIcon icon={faLock} className="icon" />
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder=""
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div className="form-group">
          <a href="#" className="forgot">
            Forgot Password?
          </a>
        </div>
        <div className="form-group">
          <button type="submit" className="btn" onClick={handleLogin}>
            Login
          </button>
        </div>
        <div className="signup">
          Don't you have an account? <a href="/register">Sign up</a>
        </div>
      </form>
    </div>
  );
}

export default Login;