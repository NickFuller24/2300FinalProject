import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #003049;
  font-weight: 1000;
`;

const FileCard = (props) => {
  return (
    <StyledLink to={"/file/" + props.mid}>
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
    </StyledLink>
  );
};

export default FileCard;