// import React from 'react';
import React, {useState, useEffect} from 'react';
import './PostForm.css';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import NavBar from '../NavBar/NavBar';
import * as data from '../HomePage/test.json';
import Axios from 'axios';

const HomeLink = styled(Link)`
  text-decoration: none;
  color: #F77800;
  font-weight: 1000;
  margin-left: 3rem;
  font-size: 2rem;
`;

const NavWrapper = styled.ul`
  list-style-type: none;
`;

const NavLink = styled.li`
  font-size: 2rem;
  font-weight: 500;
  color: #F77800;
  font-family: 'Montserrat', sans-serif;
`;

function PostForm() {
  //For post call
  const [school, setSchool] = useState("");
  const [professor, setProfessor] = useState("");
  const [classCode, setClassCode] = useState("");
  const [department, setDepartment] = useState("");
  const [semester, setSemester] = useState("");
  const [year, setYear] = useState("");
  const [type, setType] = useState("");
  const [grade, setGrade] = useState("");
  const [title, setTitle] = useState("");
  const [PDF, setPDF] = useState("");

  // let submissions = [];
  const addFile = (ev) => {
    ev.preventDefault(); // stop form from submitting like normal
    let file = {
      mid: Date.now(),
      school: document.getElementById('school').value,
      professor: document.getElementById('professor').value,
      class: document.getElementById('classCode').value,
      department: document.getElementById('department').value,
      semester: document.getElementById('semester').value,
      year: document.getElementById('year').value,
      type: document.querySelector('input[name="type"]:checked').value,
      grade: document.getElementById('grade').value,
      title: document.getElementById('title').value,
      // PDF: document.getElementById('fileUpload').value,
    }
    
    // submissions.push(file);
    data.files.push(file);
    //console.log(data.files);
    document.forms[0].reset();


    //Sending data to back-end
    Axios.post('http://localhost:3001/api/insertFile', {
      school: school,
      professor: professor,
      classCode: classCode,
      department: department,
      semester: semester,
      year: year,
      type: type,
      grade: grade,
      title: title,
      PDF: PDF
    }).then(()=> { console.log("Success"); })
    .catch((error) => {
      if( error.response ){
          console.log(error.response.data); // => the response payload 
      }
  });

  }
  
  return (
    <div className="PostForm">
      <NavBar/>
      <NavWrapper>
        <NavLink><HomeLink to="/">Return to Home</HomeLink></NavLink>
      </NavWrapper>
      <form id="postForm">
        <div id="leftColumn">
          <label className="postLabel" htmlFor="school">School</label>
          <input type="text" id="school" placeholder="MST" 
          onChange={(e)=> {setSchool(e.target.value)}}/>
          <label className="postLabel" htmlFor="professor">Professor</label>
          <input type="text" id="professor" placeholder="San Yeung" 
          onChange={(e)=> {setProfessor(e.target.value)}}/>
          <label className="postLabel" htmlFor="classCode">Class Code</label>
          <input type="text" id="classCode" placeholder="CS2300" 
          onChange={(e)=> {setClassCode(e.target.value)}}/>
          <label className="postLabel" htmlFor="department">Department</label>
          <input type="text" id="department" placeholder="CS" 
          onChange={(e)=> {setDepartment(e.target.value)}}/>
          <label className="postLabel" htmlFor="semester">Semester</label>
          <input type="text" id="semester" placeholder="Fall" 
          onChange={(e)=> {setSemester(e.target.value)}}/>
          <label className="postLabel" htmlFor="year">Year</label>
          <input type="text" id="year" placeholder="2021" 
          onChange={(e)=> {setYear(e.target.value)}}/>
        </div>
        <div id="rightColumn">
          <p>Pick what best describes this file:</p>
          <div id="typeForm">
            <input type="radio" id="test" name="type" value="Test"
            onChange={(e)=> {setType(e.target.value)}}/>
            <label htmlFor="test" className="radio">Test</label><br/>
            <input type="radio" id="study" name="type" value="Study Guide"
            onChange={(e)=> {setType(e.target.value)}}/>
            <label htmlFor="study" className="radio">Study Guide</label><br/>
            <input type="radio" id="homework" name="type" value="Homework"
            onChange={(e)=> {setType(e.target.value)}}/>
            <label htmlFor="homework" className="radio">Homework</label>
          </div>
          <label className="postLabel" htmlFor="grade">Grade</label>
          <input type="text" id="grade" placeholder="100/100" 
          onChange={(e)=> {setGrade(e.target.value)}}/>
          <label className="postLabel" htmlFor="grade">Title</label>
          <input type="text" id="title" placeholder="Exam 1" 
          onChange={(e)=> {setTitle(e.target.value)}}/>
          <label className="postLabel" htmlFor="fileUpload">Upload a File</label>
          <input type="file" id="fileUpload"required
          onChange={(e)=> {setPDF(e.target.value)}}/>
        </div>
        <button id="submitButton" onClick={addFile}>SUBMIT</button>
      </form>
    </div>
  );
}

export default PostForm;