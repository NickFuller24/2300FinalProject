import React from 'react';
import './PostForm.css';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import * as data from '../HomePage/test.json';

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
      PDF: document.getElementById('fileUpload').value,
    }
  
    // submissions.push(file);
    data.files.push(file);
    console.log(data.files);
    document.forms[0].reset();
  }
  
  return (
    <div className="PostForm">
      <NavWrapper>
        <NavLink><HomeLink to="/">Return to Home</HomeLink></NavLink>
      </NavWrapper>
      <form id="form">
        <div id="leftColumn">
          <label htmlFor="school">School</label>
          <input type="text" id="school" placeholder="Missouri S&T" />
          <label htmlFor="professor">Professor</label>
          <input type="text" id="professor" placeholder="San Yeung" />
          <label htmlFor="classCode">Class Code</label>
          <input type="text" id="classCode" placeholder="CS 2300" />
          <label htmlFor="department">Department</label>
          <input type="text" id="department" placeholder="Computer Science" />
          <label htmlFor="semester">Semester</label>
          <input type="text" id="semester" placeholder="Fall" />
          <label htmlFor="year">Year</label>
          <input type="text" id="year" placeholder="2021" />
        </div>
        <div id="rightColumn">
          <p>Pick what best describes this file:</p>
          <div id="typeForm">
            <input type="radio" id="test" name="type" value="Test"/>
            <label htmlFor="test" className="radio">Test</label><br/>
            <input type="radio" id="study" name="type" value="Study Guide"/>
            <label htmlFor="study" className="radio">Study Guide</label><br/>
            <input type="radio" id="homework" name="type" value="Homework"/>
            <label htmlFor="homework" className="radio">Homework</label>
          </div>
          <label htmlFor="grade">Grade</label>
          <input type="text" id="grade" placeholder="100/100" />
          <label htmlFor="grade">Title</label>
          <input type="text" id="title" placeholder="Databases Test 1" />
          <label htmlFor="fileUpload">Upload a File</label>
          <input type="file" id="fileUpload"required/>
        </div>
        <button id="submitButton" onClick={addFile}>SUBMIT</button>
      </form>
    </div>
  );
}

export default PostForm;