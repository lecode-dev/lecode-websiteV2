import styled from 'styled-components';
import { Styles } from '@/styles';

export const SectionContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  padding: 7rem 25px 60px 25px;
  background-color: ${({ theme }) => theme.colors.gray};
  overflow: hidden;
  @media (${Styles.devices.tablet}) {
    display: none;
  }
`;

export const MemberContainer = styled.div`
  position: relative;
z-index: 2;
display: flex;
background-color: ${({ theme }) => theme.colors.gray};

`