import styled from 'styled-components';
import { Styles } from '@/styles';

export const SectionContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  padding: 9rem 25px 60px 25px;
  background: ${({ theme }) => theme.colors.white};
  /* flex-wrap: wrap; */
  gap: 2rem;

  @media (${Styles.devices.laptop}) {
   /* justify-content: space-between; */
   width: 100%;
  }

  @media (${Styles.devices.tablet}) {
    padding: 0.625rem;
  }
`;

export const MemberContainer = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  gap: 25px;
  justify-content: center;

  @media (${Styles.devices.tabletL}) {
    display: none;
  }
`;