import React from 'react';
import styled from 'styled-components';
import * as data from '../HomePage/test.json';
import { useParams } from 'react-router-dom';

const CardWrapper = styled.div`
  width: 400px;
  height: 600px;
  margin: 6rem 5rem 0 5rem;
`;

const Title = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  display: inline;
  margin-right: 0.5rem;
`;

const Category = styled.div`
`;

const PDFWrapper = styled.div`
  width: 400px;
  height: 400px;
  background-color: blue;
`;

const Description = styled.p`
  font-size: 1.5rem;
  display: inline;
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
          </CardWrapper>
        </div>
      );
    }
  }
};

export default FileExpanded;