import styled from 'styled-components';


export const SelectContainer = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;


`;

export const OptionsContainer = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 100;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Select = styled.select`
`;