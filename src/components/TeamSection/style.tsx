import styled from 'styled-components';
import { Changa, Montserrat } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
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
  background: ${({ theme }) => theme.colors.mainBack};
  width: 22.57vw;
  height: 418px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 25px;
  position: relative;
  z-index: 1;
  align-items: center;

  @media (${Styles.devices.laptop}) {
    width: 25vw;
    height: max-content;
  }

  @media (${Styles.devices.tabletL}) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 5.25rem 0.5rem; // 36px 8px
    width: 90%;
    height: fit-content; // 540px
    background-color: #161918;
    position: relative;
    z-index: 1;
    overflow: hidden;
    text-align: center;
    margin: 0;
    gap: 25px;
  }

  @media (${Styles.devices.tabletL}) {
    width: 100%;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 28px;

  @media (${Styles.devices.laptop}) {
    gap: 15px;
    margin-bottom: 15px;
  }

  @media (${Styles.devices.tabletL}) {
    align-items: center;
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

  @media (max-width: 1334px) {
    width: fit-content;
    height: fit-content;
  }

  @media (${Styles.devices.tabletL}) {
    width: 73.31%;
    height: 115px;
  }
`;

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.58vh;
`;

export const ExpertiseContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
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
`;
export const BgImage = styled(Image)`
  position: absolute;
  opacity: 30%;
  z-index: -1;
  transform: translate(-3.1rem, 15ex);
  width: 26.5415rem;
  height: 25.24469rem;

  @media (${Styles.devices.laptopL}) {
    transform: translate(-2rem, 21ex);
    width: 20.5415rem;
    height: 20.24469rem;
  }

  @media (${Styles.devices.laptop}) {
    transform: translate(-1.5rem, 15ex);
    width: 16.5415rem;
    height: 16.24469rem;
  }

  @media (${Styles.devices.tabletL}) {
    width: 26.5415rem;
    height: 25.24469rem;
  }
`;

export const ProfilePicture = styled(Image)`
  width: 13.875rem;
  height: 20.3125rem;

  @media (${Styles.devices.laptop}) {
    width: 10.875rem;
    height: 17.3125rem;
  }
`;

export const StyledLink = styled(Link)`
  font-size: 0.9rem;
`;

export const NameAndExpertiseContainer = styled.div `
  display: flex;
  flex-direction: column;
  width: 100%;
    height: 30%;
    gap: 10px;
    margin-top: 10px;
`

export const TechnologyContainer = styled.div `
  display: flex;
    align-self: flex-end;
    gap: 0.3vh;
`