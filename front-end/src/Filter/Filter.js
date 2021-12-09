import React from 'react';
import styled from 'styled-components';
import './Filter.css';
import * as data from '../HomePage/test.json';

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

const removeFilters = () => {
  document.getElementById("type").value = "";
  document.getElementById("class").value = "";
  document.getElementById("department").value = "";
  document.getElementById("semester").value = "";
  document.getElementById("year").value = "";
  document.getElementById("professor").value = "";
}

const applyFilters = () => {
  console.log('hello');
}

const Filter = (props) => {
  var classes = [];
  var departments = [];
  var years = [];
  var professors = [];
  for(const file in data.files) {
    if(!classes.includes(data.files[file].class)) {
      classes.push(data.files[file].class)
    }
    if(!departments.includes(data.files[file].department)) {
      departments.push(data.files[file].department)
    }
    if(!years.includes(data.files[file].year)) {
      years.push(data.files[file].year)
    }
    if(!professors.includes(data.files[file].professor)) {
      professors.push(data.files[file].professor)
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