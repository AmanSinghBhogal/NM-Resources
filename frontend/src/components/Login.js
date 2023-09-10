import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./Login.css";

const Login = () => {
  
  const navigate = useNavigate();
  const handleSubmit = event => {
    event.preventDefault();
    navigate('/home');
  };
  return (
    <div className="body">
      <img class="main-pic" src="school.png" alt=""/>
      <form onSubmit={handleSubmit} class="login-box" autocomplete="on">
          <div class="title">
              <h1>Welcome</h1>
          </div>
          <div class="input-box">
              <input type="email" name="" required class="input" id="username"/>
              <label for="username">Email</label>
          </div>
          <div class="input-box">
              <input type="password" name="" required class="input pass-input" id="password"/>
              <label for="password">Password</label>
          </div>
          <button type="submit">Login</button>
      </form>

      <Link to={"/home"}>
        <div id="profile">
            <a href="home.html"><img class="skip" src="skip.png" alt="skip-btn"/></a>
        </div>
      </Link>
    </div>
  )
}

export default Login