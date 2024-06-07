import { Poppins } from 'next/font/google';
import styled from 'styled-components';
import { Styles } from '@/styles';

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
  background: ${({ theme }) => theme.gradients.CTA};
  box-shadow: ${({ theme }) =>
    `0px 0px 8px 0px ${theme.colors.shadows.mainGreen}, 0px 0px 1.9px 0px ${theme.colors.shadows.white}`};
  cursor: pointer;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${poppins.style.fontFamily};


  &:hover {
    background: ${({ theme }) => theme.gradients.secondary};
  }
`;
