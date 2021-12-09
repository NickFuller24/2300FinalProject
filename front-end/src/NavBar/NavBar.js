import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavWrapper = styled.ul`
  position: absolute;
  right: 5rem;
  top: 10rem;
  width: 600px;
  display: flex;
  justify-content: space-between;
  list-style-type: none;
`;

const NavLink = styled.li`
  font-size: 2rem;
  font-weight: 500;
  color: #F77800;
  font-family: 'Montserrat', sans-serif;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #F77800;
  font-weight: 1000;
`;

const LogLink = styled(Link)`
  text-decoration: none;
  color: #D62828;
  font-weight: 1000;
`;

/* may need some sort of user id for saved and home */
const NavBar = (props) => {
  return (
    <NavWrapper>
      <NavLink><StyledLink to="/post">Post</StyledLink></NavLink>
      <NavLink><StyledLink to="/saved">Saved Material</StyledLink></NavLink>
      <NavLink><LogLink to="/login" onClick={logout}>Login</LogLink></NavLink>
    </NavWrapper>
  );
};

/* add logout functionality */
const logout = () => {
  // window.confirm("Are you sure you want to logout");
};

export default NavBar;