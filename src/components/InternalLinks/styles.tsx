import styled from 'styled-components';
import Link from 'next/link';
import { Changa } from 'next/font/google';
import { Styles } from '@/styles';

const changa = Changa({ weight: ['500'],subsets: ['latin'] });

export const NavLinks = styled.div`
  display: flex;
  padding: 10px;
  justify-content: flex-start;
  align-items: center;
  gap: 1.39vw;
  color: ${({ theme }) => theme.colors.black};
  line-height: 125%;
  min-width: 40%;

  @media (max-width: 1285px) {
    gap: 0.5vw;
  }
  @media (${Styles.devices.tabletL}) {
    display: none;
  }
`;

export const StyledLink = styled(Link)`
  font-size: 1.125rem;
  font-family:${changa.style.fontFamily};
  &:hover {
    color: ${({ theme }) => theme.colors.hover.mainGreen};
  }

  @media (max-width: 1285px) {
    font-size: 0.9rem;
  }
`;