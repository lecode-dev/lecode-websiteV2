import { Poppins } from 'next/font/google';
import styled from 'styled-components';

const poppins = Poppins({ weight: ['600'], style: ['normal'], subsets: ['latin'], display: 'swap' });

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
  background: ${({ theme }) => theme.colors.mainGreen};
  box-shadow: ${({ theme }) =>
    `0px 0px 8px 0px ${theme.colors.shadows.mainGreen}, 0px 0px 1.9px 0px ${theme.colors.shadows.white}`};
  cursor: pointer;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${poppins.style.fontFamily};

  &:hover {
    background: ${({ theme }) => theme.colors.hover.mainGreen};
    transition: 0.3s;
  }

  @media (max-width: 1200px) {
    font-size: 0.9rem;
    height: 2.5rem;
    padding: 1rem 1.25rem;
  }

  @media (max-width: 500px) {
    font-size: 0.5rem;
    height: 2.25rem;
    padding: 0.45rem 1rem;
  }
`;
