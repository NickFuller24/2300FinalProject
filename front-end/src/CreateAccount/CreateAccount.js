import React, {useState} from 'react';
import './CreateAccount.css';
import Axios from 'axios';

const CreateAccount = () =>{
  //For post call
  const [name, setName] = useState("");
  const [major, setMajor] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [sid, setSid] = useState("");

  const addStudent = (en) => {
    //Sending data to back-end
    Axios.post('http://localhost:3001/api/insertStudent', {
      name: name,
      major: major,
      email: email,
      password: password,
      sid: sid
    }).then(()=> { console.log("Success"); })
    .catch((error) => {
      if( error.response ){
          console.log(error.response.data); // => the response payload 
      }
    });
  }

  return (
    <div className="Login">
      <div id="SignUpWrapper">
        <form id="createAccountForm">
          <div id="headerWrapper">
            <h2>Sign Up</h2>
          </div>
          <div id="userAndPass">
            <label className="createLabel" for="name">First and Last Name:</label>
            <input key="name" id="name" type="text" required 
            onChange={(e)=> {setName(e.target.value)}}/>
            <label className="createLabel" for="major">Major:</label>
            <input key="major" id="major" type="text" required 
            onChange={(e)=> {setMajor(e.target.value)}}/>
            <label className="createLabel" for="email">Email:</label>
            <input key="email" id="email" type="email" required 
            onChange={(e)=> {setEmail(e.target.value)}}/>
            <label className="createLabel" for="password">Password:</label>
            <input key="password" id="password" type="password" required 
            onChange={(e)=> {setPassword(e.target.value)}}/>
            <label className="createLabel" for="sid">Student ID:</label>
            <input key="sid" id="sid" type="sid" required 
            onChange={(e)=> {setSid(e.target.value)}}/>
          </div>
          <div id="loginButton">
            <button onClick={addStudent}>SIGN UP</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateAccount;