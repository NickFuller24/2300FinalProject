import React from 'react';
import styled from 'styled-components'

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

const Header = () => {
  return (
    <HeaderWrapper>
      <Title>Test Bank</Title>
    </HeaderWrapper>
  );
};

export default Header;