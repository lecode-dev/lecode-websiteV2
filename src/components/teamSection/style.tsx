import styled from 'styled-components';
import { Changa, Montserrat } from 'next/font/google';
import { Styles } from '@/styles';

const changa = Changa({ weight: ['500', '600'], subsets: ['latin'] });
const monteserrat = Montserrat({ weight: ['500'], subsets: ['latin'] });

export const SectionContainer = styled.div`
  position: relative;
  width: 100vw;
  height: fit-content;
  display: flex;
  gap: 1.3vw;
  margin: 5em 8em;

  @media (${Styles.devices.laptop}) {
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin: auto;
  }
`;

export const ContactContainer = styled.div`
  background: ${({ theme }) => theme.colors.black};
  width: 22.57vw;
  height: 418px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 25px;
  margin-right: 25px;
`;

export const Header = styled.h1`
  font-size: 2em;
  line-height: 125%;
  color: ${({ theme }) => theme.colors.mainGreen};
  font-family: ${changa.style.fontFamily};
`;

export const Paragraph = styled.p`
  font-family: ${monteserrat.style.fontFamily};
  font-size: 1em;
  color: ${({ theme }) => theme.colors.white};
  line-height: 140%;
  text-transform: uppercase;
  width: 73.31%;
  height: 115px;
`;
export const MemberName = styled.p`
  font-family: ${changa.style.fontFamily};
  font-size: 1.1em;
  font-style: normal;
  line-height: 125%;
  font-weight: 600;
`;
