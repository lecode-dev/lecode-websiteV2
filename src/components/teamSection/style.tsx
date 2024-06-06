import styled from 'styled-components';
import { Changa, Montserrat } from 'next/font/google';
import Image from 'next/image';
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
  align-items: center;

  @media (${Styles.devices.laptopL}) {
    align-items: center;
    justify-content: center;
    margin: auto;
  }

  @media (${Styles.devices.laptop}) {
    justify-content: space-around;
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
  position: relative;
  z-index: 1;
margin-right: 25px;

@media (${Styles.devices.laptop}) {
  width: 25.57vw;
  }

  @media (${Styles.devices.tabletL}) {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2.25rem 0.5rem; // 36px 8px
  width: 90%;
  height: 33.75rem; // 540px
  background-color: black;
  position: relative;
  z-index: 1;
  overflow: hidden; 
 }
  
`;

export const Header = styled.h1`
  font-size: 2rem;
  line-height: 125%;
  color: ${({ theme }) => theme.colors.mainGreen};
  font-family: ${changa.style.fontFamily};
`;

export const Paragraph = styled.p`
  font-family: ${monteserrat.style.fontFamily};
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.white};
  line-height: 140%;
  text-transform: uppercase;
  width: 73.31%;
  height: 115px;
`;
export const MemberName = styled.p`
  font-family: ${changa.style.fontFamily};
  font-size: 1.1rem;
  font-style: normal;
  line-height: 125%;
  font-weight: 600;
`;
export const Subparagraph = styled.small`
    font-family: ${changa.style.fontFamily};
  font-size: 0.8rem;
`
export const BgImage = styled(Image)`
  position: absolute;
  opacity: 30%;
  z-index: -1;
  transform: translate(-3.1rem, 15ex);
`
 
export const ProfileContainer = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 18px;
`

export const ProfilePicture = styled(Image)`
width: 238px;
height: 341px;

@media (${Styles.devices.laptop}) {
  width: 20.53vw;
  height: 23.58vh;
   }
`

export const ExpertiseContainer = styled.div `
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`