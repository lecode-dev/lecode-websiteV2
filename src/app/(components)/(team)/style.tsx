import styled from 'styled-components';
import { Styles } from '@/styles';

export const SectionContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  padding: 7rem 25px 60px 25px;
  background: ${({ theme }) => theme.colors.white};
  flex-wrap: wrap;

  @media (${Styles.devices.desktop}) {
   justify-content: space-evenly;
  }

  @media (${Styles.devices.laptop}) {
   justify-content: space-between;
   width: 100%;

  }

  @media (${Styles.devices.tabletL}) {
    justify-content: center;
  }
`;

export const MemberContainer = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  width: 40vw;
  gap: 25px;
  justify-content: center;

  @media (${Styles.devices.laptopL}) {
    width: 66.56%;
  }

  @media (${Styles.devices.tabletL}) {
    display: none;
  }
`;
