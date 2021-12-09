import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderWrapper = styled.div`
  background-color: #EAE2B7;
  display: flex;
`;

const Title = styled.h1`
  font-size: 4rem;
  margin-left: 5rem;
  color: #003049;
  font-family: 'Montserrat', sans-serif;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #003049;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <Title>
        <StyledLink to="/">Test Bank</StyledLink>
      </Title>
    </HeaderWrapper>
  );
};

export default Header;