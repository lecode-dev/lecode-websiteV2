import styled from 'styled-components';

export const HeaderContainer = styled.header<{ scrolled: boolean }>`
  display: none;
  background-color: ${(props) => (props.scrolled ? 'white' : 'transparent')};
  box-shadow: ${(props) => (props.scrolled ? '0 2px 4px rgba(0, 0, 0, 0.1)' : 'none')};
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
  
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
  }
`;

export const Logo = styled.img<{ scrolled: boolean }>`
  height: 40px;
  transition: opacity 0.3s ease;
  opacity: ${(props) => (props.scrolled ? 0 : 1)};
`;

export const NavLinks = styled.nav<{ scrolled: boolean }>`
  display: ${(props) => (props.scrolled ? 'flex' : 'none')};
  gap: 15px;

  a {
    text-decoration: none;
    color: black;
    font-size: 16px;
  }
`;
