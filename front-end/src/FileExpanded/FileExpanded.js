import React from 'react';
import styled from 'styled-components';
import * as data from '../HomePage/test.json';
import { useParams } from 'react-router-dom';

const CardWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 6rem 5rem 0 5rem;
  display: grid;
  grid-template-columns: 800px 1rem auto;
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

const FileExpanded = (props) => {
  // get url parameters
  let params = useParams();

  for(const file in data.files) {
    if(data.files[file].mid === params.id) {
      return (
        <div className="FileExpanded">
          <CardWrapper>
            <PDFWrapper/>
            <TextWrapper>
              <Category>
                <Title>Class:</Title>
                <Description>{data.files[file].class}</Description>
              </Category>
              <Category>
                <Title>Title:</Title>
                <Description>{data.files[file].title}</Description>
              </Category>
              <Category>
                <Title>Semester:</Title>
                <Description>{data.files[file].semester}</Description>
              </Category>
              <Category>
                <Title>Professor:</Title>
                <Description>{data.files[file].professor}</Description>
              </Category>
              <Category>
                <Title>School:</Title>
                <Description>{data.files[file].school}</Description>
              </Category>
              <Category>
                <Title>Grade:</Title>
                <Description>{data.files[file].grade}</Description>
              </Category>
            </TextWrapper>
          </CardWrapper>
        </div>
      );
    }
  }
};

export default FileExpanded;