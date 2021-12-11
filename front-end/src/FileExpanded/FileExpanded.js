import React, {useState, useEffect, useLayoutEffect} from 'react';
import styled from 'styled-components';
// import * as data from '../HomePage/test.json';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import Axios from 'axios';
import { GoFile } from "react-icons/go";
import {IconContext} from "react-icons";

const CardWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 4rem 5rem 0 5rem;
  display: grid;
  grid-template-columns: 800px 4rem auto;
`;

const Title = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  display: inline;
  margin-right: 0.5rem;
`;

const TextWrapper = styled.div`
  grid-column-start: 3;
`;

const PDFWrapper = styled.div`
  width: 800px;
  height: 800px;
  background-color: blue;
  display: inline-block;
`;

const Description = styled.p`
  font-size: 2rem;
  display: inline;
`;

const Category = styled.div`
  margin-bottom: 1.5rem;
`;

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

const FileExpanded = (props) => {
  // get url parameters
  const [isLoading, setLoading] = useState(true);
  const [fileInfo, setFileInfo] = useState([]);

  let params = useParams();

  // Sucessfully gets combined datatable of material and class from back-end
  // Still needs to be added as gui file upon gui startup!
  var files = [];
  useEffect(() => {
    Axios.get('http://localhost:3001/api/loadFiles').then((response)=> {
      const resultArray = Object.values(JSON.parse(JSON.stringify(response)));  
      // console.log(resultArray[0]);
      files = [];
      for(const file in resultArray[0]) {
        // console.log(resultArray[0][file]);
        files.push(resultArray[0][file]);
        console.log(files[file]);
      }
      setFileInfo(files);
      setLoading(false);
    });
  }, []);

  if (isLoading) {
    return (
      <div className="FileExpanded">
        <NavBar/>
      </div>
    )
  }

  for(const file in fileInfo) {
    console.log(file);
    if(fileInfo[file].mId === parseInt(params.id)) {
      return (
        <div className="FileExpanded">
          <IconContext.Provider value={{color: "#003049", size:"40em"}}>
          <NavBar/>
          <NavWrapper>
            <NavLink><HomeLink to="/">Return to Home</HomeLink></NavLink>
          </NavWrapper>
          <CardWrapper>
            <GoFile/>
            <TextWrapper>
              <Category>
                <Title>Class:</Title>
                <Description>{fileInfo[file].cKey}</Description>
              </Category>
              <Category>
                <Title>Title:</Title>
                <Description>{fileInfo[file].mTitle}</Description>
              </Category>
              <Category>
                <Title>Semester:</Title>
                <Description>{fileInfo[file].semester}</Description>
              </Category>
              <Category>
                <Title>Year:</Title>
                <Description>{fileInfo[file].year}</Description>
              </Category>
              <Category>
                <Title>Professor:</Title>
                <Description>{fileInfo[file].professor}</Description>
              </Category>
              <Category>
                <Title>School:</Title>
                <Description>{fileInfo[file].school}</Description>
              </Category>
              <Category>
                <Title>Grade:</Title>
                <Description>{fileInfo[file].grade}</Description>
              </Category>
            </TextWrapper>
          </CardWrapper>
          </IconContext.Provider>
        </div>
      );
    }
  }
  return (
    <div className="FileExpanded">
      <NavBar/>
    </div>
  )
};

export default FileExpanded;
