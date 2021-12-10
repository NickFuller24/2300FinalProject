import React, {useState, useEffect, useLayoutEffect} from 'react';
import styled from 'styled-components';
import './Filter.css';
import Axios from 'axios';
// import * as data from '../HomePage/test.json';

const FilterWrapper = styled.div`
  width: 300px;
  height: 900px;
  /* background-color: red; */
  grid-column-start: 2;
  display: grid;
  grid-template-rows: 100px 800px;
  border: 2px solid #003049;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
`;

const Header = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: #003049;
`;

const HeaderWrapper = styled.div`
  border-bottom: 2px solid #003049;
  display: grid;
  justify-content: center;
  box-sizing: border-box;
`;

const OptionsWrapper = styled.div`
  padding: 1rem;
`;

const Filter = (props) => {
  const [isLoading, setLoading] = useState(true);
  const [fileInfo, setFileInfo] = useState([]);

  var classes = [];
  var departments = [];
  var years = [];
  var professors = [];
  var files = [];

  const removeFilters = () => {
    document.getElementById("type").value = "";
    document.getElementById("class").value = "";
    document.getElementById("department").value = "";
    document.getElementById("semester").value = "";
    document.getElementById("year").value = "";
    document.getElementById("professor").value = "";
    props.filterCall([]);
  };

  const applyFilters = () => {
    let filtering = false;
    let filters = document.querySelectorAll('select');
    let appliedFilters = [];
    for(const filter in filters) {
      // console.log(filters[filter]);
      if (filters[filter].value) {
        filtering = true;
        appliedFilters.push([filters[filter].id, filters[filter].value]);
      }
      // console.log(filters[filter].id, " ", filters[filter].value);
    }
    if (filtering) {
      props.filterCall(appliedFilters);
    }
    // console.log('hello');
  };

  useEffect(() => {
    Axios.get('http://localhost:3001/api/loadFiles').then((response)=> {
      const resultArray = Object.values(JSON.parse(JSON.stringify(response)));  
      // console.log(resultArray[0]);
      files = [];
      for(const file in resultArray[0]) {
        // console.log(resultArray[0][file]);
        files.push(resultArray[0][file]);
        // console.log(files[file]);
      }
      setFileInfo(files);
      setLoading(false);
    });
  }, []);

  if (isLoading) {
    return (
      <div></div>
    )
  }

  for(const file in fileInfo) {
    if(!classes.includes(fileInfo[file].cKey)) {
      classes.push(fileInfo[file].cKey)
    }
    if(!departments.includes(fileInfo[file].dept)) {
      departments.push(fileInfo[file].dept)
    }
    if(!years.includes(fileInfo[file].year)) {
      years.push(fileInfo[file].year)
    }
    if(!professors.includes(fileInfo[file].professor)) {
      professors.push(fileInfo[file].professor)
    }
  }

  return (
    <FilterWrapper>
      <HeaderWrapper>
        <Header>Filter</Header>
      </HeaderWrapper>
      <OptionsWrapper>
        <select id="type" defaultValue="">
          <option key="default" value="" disabled>Material Type</option>
          <option key="test" value="Test">Test</option>
          <option key="hw" value="Homework">Homework</option>
          <option key="study" value="Study Guide">Study Guide</option>
        </select>

        <select id="class" defaultValue="">
          <option key="default" value="" disabled>Class</option>
          {classes.map((el) => {
            return <option key={el} value={el}>{el}</option>
          })}
        </select>

        <select id="department" defaultValue="">
          <option key="default" value="" disabled>Department</option>
          {departments.map((el) => {
            return <option key={el} value={el}>{el}</option>
          })}
        </select>

        <select id="semester" defaultValue="">
          <option key="default" value="" disabled>Semester</option>
          <option key="spring" value="Spring">Spring</option>
          <option key="summer" value="Summer">Summer</option>
          <option key="fall" value="Fall">Fall</option>
        </select>

        <select id="year" defaultValue="">
          <option key="default" value="" disabled>Year</option>
          {years.map((el) => {
            return <option key={el} value={el}>{el}</option>
          })}
        </select>

        <select id="professor" defaultValue="">
          <option key="default" value="" disabled>Professor</option>
          {professors.map((el) => {
            return <option key={el} value={el}>{el}</option>
          })}
        </select>

        <button id="applyFilters" onClick={applyFilters}>Apply Filters</button>
        <button id="removeFilters" onClick={removeFilters}>Remove Filters</button>
      </OptionsWrapper>
    </FilterWrapper>
  );
};

export default Filter;