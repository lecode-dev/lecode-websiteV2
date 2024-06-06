import styled from 'styled-components';

export const ContainerLanguage = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: fit-content;
`;

export const SelectContainer = styled.button`
  cursor: pointer;
  border-radius: 4px;
  border: none;
  background-color: white;
`;

export const OptionsContainer = styled.div`
  border-radius: 4px;
  margin-top: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  position: absolute;
  top: 100%;
`;
export const Option = styled.div`
  text-align: center;
  padding: 10px;
  min-width: fit-content;
  height: 30px;
  background-color: white;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
`;
