import Image from 'next/image';
import styled from 'styled-components';



export const ContactTraslate = styled.div `
  display: flex;
  justify-content: space-between;
  gap: 0.250rem; 
  align-items: center;
`;

export const NavbarContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  padding: 0.625rem;
   
  @media (min-width: 768px){
  padding-right: 0.625rem;
  }
`;

export const NavbarContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 98%; 

  @media (min-width: 1440px) {
    width: 90rem; 
  }
`;

export const LecodeLogo = styled(Image) `
  @media (max-width: 501px) {
    width: 50px;
}
`;

