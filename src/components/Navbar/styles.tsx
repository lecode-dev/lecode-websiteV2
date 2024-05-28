import styled from 'styled-components';
import Link from 'next/link';
import { Styles } from '@/styles';

export const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  display: flex;
  width: 100vw;
  height: 6.875rem;
  padding: 0.625rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  flex-shrink: 0;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);
  z-index: 5;
  @media (${Styles.sizes.tablet}) {
    display: none;
  }
`;
export const NavbarContentContainer = styled.div`
  display: flex;
  padding: 0.625rem;
  justify-content: space-between;
  align-items: center;
  width: 90rem;
`;

export const NavLinks = styled.div`
  display: flex;
  padding: 0.625rem;
  justify-content: center;
  align-items: center;
  gap: 1.25rem;
  color: ${({ theme }) => theme.colors.black};
  font-size: 1rem;
`;

export const StyledLink = styled(Link)`
  &:hover {
    color: ${({ theme }) => theme.hover['main-green']};
  }
`;