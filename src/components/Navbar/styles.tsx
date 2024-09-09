import styled from 'styled-components';
import Image from 'next/image';
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
  gap: 10px;
  flex-shrink: 0;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);
  z-index: 1000;

  @media (${Styles.devices.tabletL}) {
    display: none;
  }
`;

export const NavbarContentContainer = styled.div`
  display: flex;
  padding: 10px;
  justify-content: space-between;
  align-items: center;
  width: 90%;

  @media (${Styles.devices.laptopL}) {
    width: 100%;
    margin: 0 20%;
    gap: 2%;
  }
`;

export const LecodeLogo = styled(Image) `
  align-self: center;

  @media (${Styles.devices.laptopL}) {
    margin-right: 10%;
}
`
export const TranslateButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  min-width: 40%;
  justify-content: end;
`