import styled from 'styled-components';
import { Styles } from '@/styles';

export const SectionContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  padding: 60px 25px 60px 25px;
  background-color: ${({ theme }) => theme.colors.gray};

  @media (${Styles.devices.tablet}) {
    display: none;
  }
`;