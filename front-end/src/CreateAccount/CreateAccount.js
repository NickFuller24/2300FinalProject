import React from 'react';
import './CreateAccount.css';

// import * as data from '../Users/users.json';

const CreateAccount = () =>{
  // console.log(fileInfo);
  return (
    <div className="Login">
      <div id="SignUpWrapper">
        <form id="createAccountForm">
          <div id="headerWrapper">
            <h2>Sign Up</h2>
          </div>
          <div id="userAndPass">
            <label className="createLabel" for="name">First and Last Name:</label>
            <input key="name" id="name" type="text" required />
            <label className="createLabel" for="major">Major:</label>
            <input key="major" id="major" type="text" required />
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