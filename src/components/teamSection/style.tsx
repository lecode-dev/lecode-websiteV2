import Image from 'next/image';
import styled from 'styled-components';
import { Paragraph1, Styles } from '@/styles';
import { Mask } from '@/app/(components)/(testimony)/styles';

export const SectionContainer = styled.div`
  position: relative;
  width: 100vw;
  height: fit-content;
  display: flex;
  gap: 1.30vw;
  margin: 5em 8em;

  @media (${Styles.devices.laptop}) {
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin: auto;
  }
`;



