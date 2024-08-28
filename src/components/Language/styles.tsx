import styled from 'styled-components';

export const ContainerLanguage = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  width: fit-content;
  border-radius: 8px;

  &:hover {
    background-color: #ccc;
  }
`;

export const SelectContainer = styled.button`
  cursor: pointer;
  padding: 8px 24px;
  border: none;
  background-color: transparent;

  @media (max-width: 500px) {
    padding: 8px 16px;
    img {
      width: 20px;
      height: 20px;
    }
  }
`;

export const OptionsContainer = styled.div`
  border-radius: 8px;
  margin-top: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  position: absolute;
  top: 100%;
  width: 100%;
`;

export const Option = styled.div`
  text-align: center;
  padding: 10px;
  min-width: fit-content;
  background-color: white;
  cursor: pointer;
  text-align: center;

  &:first-child {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }
  &:last-child {
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }

  &:hover {
    background-color: #ccc;
  }
`;
