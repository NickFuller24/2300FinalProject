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
  document.getElementById("material").value = "";
  document.getElementById("class").value = "";
  document.getElementById("department").value = "";
  document.getElementById("semester").value = "";
  document.getElementById("year").value = "";
  document.getElementById("professor").value = "";
}

const Filter = () => {
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
        <select id="material">
          <option value="" disabled selected>Material Type</option>
          <option value="Test">Test</option>
          <option value="Homework">Homework</option>
          <option value="Study Guide">Study Guide</option>
        </select>

        <select id="class">
          <option value="" disabled selected>Class</option>
          {classes.map((el) => {
            return <option value={el}>{el}</option>
          })}
        </select>

        <select id="department">
          <option value="" disabled selected>Department</option>
          {departments.map((el) => {
            return <option value={el}>{el}</option>
          })}
        </select>

        <select id="semester">
          <option value="" disabled selected>Semester</option>
          <option value="Spring">Spring</option>
          <option value="Summer">Summer</option>
          <option value="Fall">Fall</option>
        </select>

        <select id="year">
          <option value="" disabled selected>Year</option>
          {years.map((el) => {
            return <option value={el}>{el}</option>
          })}
        </select>

        <select id="professor">
          <option value="" disabled selected>Professor</option>
          {professors.map((el) => {
            return <option value={el}>{el}</option>
          })}
        </select>

        <button onClick={removeFilters}>Remove Filters</button>
      </OptionsWrapper>
    </FilterWrapper>
  );
};

export default Filter;