import styled from 'styled-components';

export const ContactButton = styled.button`
  display: flex;
  width: fit-content;
  height: 3.25rem;
  padding: 1.5625rem 1.5rem;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 0.5rem;
  font-size: 1rem;
  border: none;
  background: ${({ theme }) => theme.gradients.CTA};
  box-shadow: ${({ theme }) => `0px 0px 8px 0px ${theme.shadows['main-green']}, 0px 0px 1.9px 0px ${theme.shadows.white}`};
  cursor: pointer;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.white};

  &:hover {
    background: ${({ theme }) => theme.gradients.secondary};
  }
`;
