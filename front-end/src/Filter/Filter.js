import React from 'react';
import styled from 'styled-components'

const FilterWrapper = styled.div`
  width: 300px;
  height: 900px;
  background-color: red;
  grid-column-start: 2;
`;


const Filter = () => {
  return (
    <FilterWrapper></FilterWrapper>
  );
};

export default Filter;