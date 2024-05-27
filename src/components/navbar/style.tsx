import styled from 'styled-components';
import Link from 'next/link';

export const NavbarContainer = styled.nav`
  position: fixed;
  display: flex;
  width: 100vw;
  height: 6.875rem;
  padding: 0.625rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  flex-shrink: 0;
  background: var(--branco, #fff);
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);
  z-index: 5;
  @media (max-width: 1280px) {
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
  color: #000;
  font-size: 1rem;
`;

export const StyledLink = styled(Link)`
  &:hover {
    color: #02a267;
  }
`;
