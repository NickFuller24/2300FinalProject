import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const NavWrapper = styled.ul`
  display: flex;
  list-style-type: none;
`;

const NavLink = styled.li`
  font-size: 2rem;
  font-weight: 500;
  color: #003049;
  font-family: 'Montserrat', sans-serif;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #003049;
`;

/* may need some sort of user id for saved and home */
const NavBar = () => {
  return (
    <NavWrapper>
      <NavLink><StyledLink to="/post">Post</StyledLink></NavLink>
      <NavLink><StyledLink to="/saved">Saved Material</StyledLink></NavLink>
      <NavLink><StyledLink to="/" onClick={logout}>Logout</StyledLink></NavLink>
    </NavWrapper>
  );
};

/* add logout functionality */
const logout = () => {
  alert("Are you sure you want to logout");
};

export default NavBar;