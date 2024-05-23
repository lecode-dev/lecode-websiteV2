import styled from 'styled-components';

export const NavbarContainer = styled.nav`
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
  
  @media (max-width: 780px) {
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

export const ContactButton = styled.button`
  display: flex;
  width: fit-content;
  height: 3.25rem;
  padding: 1.5625rem 1.5rem;
  margin-left: 20rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  flex-shrink: 0;
  border-radius: 0.5rem;
  font-size: 1rem;
  cursor: pointer;
  background: radial-gradient(708.43% 135.72% at 8.24% 0%, #01b473 0%, #70be81 56%, #048556 100%);
  box-shadow: 0px 0px 8px 0px #00ab26, 0px 0px 0px 0px #fffafa;
  &:hover {
    background: radial-gradient(708.43% 135.72% at 8.24% 0%, #00945e 0%, #70be81 56%, #048556 100%);
  }
`;
