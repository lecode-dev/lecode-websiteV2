import styled from 'styled-components';

export const Select = styled.select`
  width: 150px;
  height: 30px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  appearance: none; /* Remover o estilo padrão do select */
  background-image: url('https://fontawesome.com/icons/arrow-down'); /* Ícone de seta para baixo */
  background-repeat: no-repeat;
  background-position: right center;
  background-size: 20px;
  cursor: pointer;
`;