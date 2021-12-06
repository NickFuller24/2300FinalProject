import React from 'react';
import styled from 'styled-components'

const NavWrapper = styled.ul`
  display: flex;
  list-style-type: none;
`;

const NavLink = styled.li`
  font-size: 2rem;
  /* margin-left: 5rem; */
  color: #003049;
  font-family: 'Montserrat', sans-serif;
`;

const NavBar = () => {
  return (
    <NavWrapper>
      <NavLink>Post</NavLink>
      <NavLink>Saved Material</NavLink>
      <NavLink>Logout</NavLink>
    </NavWrapper>
  );
};

export default NavBar;