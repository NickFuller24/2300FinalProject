import React from 'react';
import './CreateAccount.css';

// import * as data from '../Users/users.json';

const CreateAccount = () =>{
  // console.log(fileInfo);
  return (
    <div className="Login">
      <div id="LoginWrapper">
        <form id="createAccountForm">
          <div id="headerWrapper">
            <h2>Login</h2>
          </div>
          <div id="userAndPass">
            <label className="createLabel" for="username">Username:</label>
            <input key="username" id="username" type="text" required />
            <label className="createLabel" for="email">Email:</label>
            <input key="email" id="email" type="email" required />
            <label className="createLabel" for="password">Password:</label>
            <input key="password" id="password" type="password" required />
            <label className="createLabel" for="confirm">Confirm Password:</label>
            <input key="confirm" id="confirm" type="password" required />
          </div>
          <div id="loginButton">
            <button>SIGN UP</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateAccount;