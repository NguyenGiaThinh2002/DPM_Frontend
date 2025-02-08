import React, { useState } from 'react'
import './Home.css'
import { useNavigate } from 'react-router-dom';
export default function Home() {
  const navigate = useNavigate();

  const [signUpData, setSignUpData] = useState({
    username: '',
    email: '',
    phone: '',
    password: '',
  });

  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  });

  // Handlers for sign-up and login form input changes
  const handleSignUpChange = (e) => {
    const { name, value } = e.target;
    setSignUpData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Sign-up form submission (you can add real form submission logic)
  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    console.log('Sign Up Data:', signUpData);
  };

  // Login form submission (you can add real form submission logic)
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    navigate("/mainPage");
    // window.location.reload(); // Reloads/refresh the page
    // console.log('Login Data:', loginData);
  };
  return (
    <div className='home'>
      <div className="homeMain">
        <input className='homeInput' type="checkbox" id="chk" checked aria-hidden="true" />

        <div className="signup">
          <form onSubmit={handleSignUpSubmit}>
            <label htmlFor="chk1" aria-hidden="true">
              Sign up
            </label>
            <input
              className='homeInput'
              type="text"
              name="username"
              placeholder="User name"
              required
              value={signUpData.username}
              onChange={handleSignUpChange}
            />
            <input
              className='homeInput'
              type="email"
              name="email"
              placeholder="Email"
              required
              value={signUpData.email}
              onChange={handleSignUpChange}
            />
            <input
              className='homeInput'
              type="number"
              name="phone"
              placeholder="BrojTelefona"
              required
              value={signUpData.phone}
              onChange={handleSignUpChange}
            />
            <input
              className='homeInput'
              type="password"
              name="password"
              placeholder="Password"
              required
              value={signUpData.password}
              onChange={handleSignUpChange}
            />
            <button className='homeButton' type="submit">Sign up</button>
          </form>
        </div>

        <div className="login">
          <form onSubmit={handleLoginSubmit}>
            <div style={{ margin: "5px" }}></div>
            <label htmlFor="chk" style={{ fontSize: "40px", fontWeight: "bold" }}>
              Login
            </label>
            <input
              className='homeInput'
              type="text"
              name="username"
              placeholder="User name"
              required
              value={loginData.username}
              onChange={handleLoginChange}
            />
            <input
              className='homeInput'
              type="password"
              name="password"
              placeholder="Password"
              required
              value={loginData.password}
              onChange={handleLoginChange}
            />
            <button className='homeButton' type="submit">Login</button>
            <div className='version'>v 1.0.0.0 build 250302 1416</div>
          </form>
        </div>
      </div>
    </div>
  )
}
