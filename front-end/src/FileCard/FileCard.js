import React from 'react';
import styled from 'styled-components'

const CardWrapper = styled.div`
  width: 400px;
  height: 600px;
  margin-right: 1rem;
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

const FileCard = (props) => {
  return (
    <CardWrapper>
      <PDFWrapper/>
      <Category>
        <Title>Class:</Title>
        <Description>{props.class}</Description>
      </Category>
      <Category>
        <Title>Title:</Title>
        <Description>{props.title}</Description>
      </Category>
      <Category>
        <Title>Semester:</Title>
        <Description>{props.semester}</Description>
      </Category>
    </CardWrapper>
  );
};

export default FileCard;