import Link from 'next/link';
import styled from 'styled-components';
import { Styles } from '@/styles';
import Image from 'next/image';

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

  @media (${Styles.devices.tablet}) {
    display: none;
  }
`;

export const NavbarContentContainer = styled.div`
  display: flex;
  padding: 10px;
  justify-content: space-between;
  align-items: center;
  width: 90rem;

  @media (${Styles.devices.laptopL}) {
    width: fit-content;
  }
`;

export const LecodeLogo = styled(Image) `
  margin-right: 20%;

  @media (${Styles.devices.laptopL}) {
    margin-right: 10%;
}
`
