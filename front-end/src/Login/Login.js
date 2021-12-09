import React from 'react';
import './Login.css';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// import * as data from '../Users/users.json';

const AccountLink = styled(Link)`
  text-decoration: none;
  color: #D62828;
  font-weight: 1000;
  display: block;
  font-size: 2rem;
  font-family: 'Montserrat', sans-serif;
`;

const Login = () =>{
  // console.log(fileInfo);
  return (
    <div className="Login">
      <div id="LoginWrapper">
        <form>
          <div id="headerWrapper">
            <h2>Login</h2>
          </div>
          <div id="userAndPass">
            <label className="loginLabel" for="username">Username:</label>
            <input key="username" id="username" type="text" required />
            <label className="loginLabel" for="password">Password:</label>
            <input key="password" id="password" type="password" required />
          </div>
          <div id="loginButton">
            <button>LOGIN</button>
          </div>
        </form>
        <div id="accountWrapper">
          <AccountLink to="/createaccount">Create an Account</AccountLink>
        </div>
      </div>
    </div>
  );
};

export default Login;