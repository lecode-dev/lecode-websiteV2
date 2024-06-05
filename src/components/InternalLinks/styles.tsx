import styled from 'styled-components';
import Link from 'next/link';
import { Changa } from 'next/font/google';
import { Styles } from '@/styles';

const changa = Changa({ weight: ['500'],subsets: ['latin'] });

export const NavLinks = styled.div`
  display: flex;
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 1.39vw;
  color: ${({ theme }) => theme.colors.black};
  line-height: 125%;
  
  @media (${Styles.devices.tablet}) {
    display: none;
  }
`;

export const StyledLink = styled(Link)`
  font-size: 1.125rem;
  font-family:${changa.style.fontFamily};
  &:hover {
    color: ${({ theme }) => theme.colors.hover.mainGreen};
  }

  @media (${Styles.devices.laptop}) {
    font-size: 1rem;
  }
`;