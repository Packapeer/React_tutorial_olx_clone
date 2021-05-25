import React from 'react';
import {Link} from 'react-router-dom';

import Logo from '../../olx-logo.png';
import './Login.css';

function Login() {
  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <Link to="/signup">
          <a>Signup</a>
        </Link>
      </div>
    </div>
  );
}

export default Login;
