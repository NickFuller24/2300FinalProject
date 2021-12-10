import React from 'react';
import './Login.css';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Axios from 'axios';

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

  //Retrieve student data from back-end for comparison
  const confirmLogin = (en) => {
  // Sucessfully gets students from back-end
  Axios.get('http://localhost:3001/api/verifyLogin').then((response)=> {
    const resultArray = Object.values(JSON.parse(JSON.stringify(response)));  
    console.log(resultArray[0]);    
  });
};

  // console.log(fileInfo);
  return (
    <div className="Login">
      <div id="LoginWrapper">
        <form>
          <div id="headerWrapper">
            <h2>Login</h2>
          </div>
          <div id="userAndPass">
            <label className="loginLabel" for="email">Email:</label>
            <input key="email" id="email" type="email" required/>
            <label className="loginLabel" for="password">Password:</label>
            <input key="password" id="password" type="password" required/>
          </div>
          <div id="loginButton">
            <button onClick={confirmLogin}>LOGIN</button>
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