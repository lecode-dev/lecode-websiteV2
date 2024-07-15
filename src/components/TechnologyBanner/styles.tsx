import Image from 'next/image';
import styled from 'styled-components';
import { Header1, Subtitle, Header32, Paragraph1, Styles } from '@/styles';


export const TechnologyContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  padding: 8rem 25px 60px 25px;
  background: ${({ theme }) => theme.colors.mainBack};
  overflow: hidden;

  @media (${Styles.devices.mobileL}) {
    text-align: center;
  }
`;
export const ContainerMainText = styled.div`
  margin-bottom: 48px;
  @media (${Styles.devices.mobileL}) {
    font-size: 1.5rem;
  }
  `;
interface LearnAboutTextProps {
  color?: string;
}
export const TextRow = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  @media (${Styles.devices.mobileL}) {
    width: 100%;
    
  }  
`;

export const LearnAboutText = styled(Header1)<LearnAboutTextProps>`
  text-align: center;
  color: ${({ color, theme }) => (color === 'green' ? theme.colors.mainGreen : theme.colors.white)};
  text-shadow: 0px 0px 5px ${({ theme }) => theme.colors.mainGreen};
  @media (${Styles.devices.mobileL}) {
    font-size: 1rem;
    width: 100%;
  }
`;
export const WrapContainer = styled.div`
  display: flex;
  @media (${Styles.devices.mobileL}) {
    flex-direction: column;
    align-items: center;
  }
`;
export const ContainerSubText = styled.div`
  border: 5px solid purple;
  margin-top: 1rem;
`;
export const MoreTechnologiesText = styled(Subtitle)`
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  padding-top: 0.5rem;
  text-shadow: 0px 0px 5px ${({ theme }) => theme.colors.mainGreen};
  font-size: 1.5rem;

  @media (${Styles.devices.mobileL}) {
    font-size: 1rem;  }
`;

export const ContainerTechnology = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  @media (${Styles.devices.tablet}) { 
    flex-direction:column;
    gap:4rem;
  }
`;

export const CardTechnology = styled.div`
  height: 100%;
`;

export const TitleCardTechnology = styled(Header32)`
  color: ${({ theme }) => theme.colors.white};
  width: 209px;
  margin-bottom: 18px;
`;
export const MainTitleTechnology = styled(Subtitle)`
  color: ${({ theme }) => theme.colors.white};
  width: 209px;
  margin-bottom: 18px;
`;

export const TechnologyDescription = styled(Paragraph1)`
  color: ${({ theme }) => theme.colors.white};
  width: 209px;
  margin-bottom: 18px;
`;
export const OthersFrameworksText = styled(Subtitle)`
  color: ${({ theme }) => theme.colors.white};
  width: 209px;
  margin-bottom: 18px;

  @media (${Styles.devices.mobileL}) {
    font-size: 1rem;  }
`;
export const UnorderedListTecnology = styled.ul`
  padding: 0;
  margin: 0;
  list-style-type: disc;
  list-style-position: inside;
`;

export const ListTecnologys = styled(Paragraph1).attrs({ as: 'li' })`
  color: ${({ theme }) => theme.colors.white};
  padding: 2px 0;
  width: auto;
`;



export const StyledMaskTechnology = styled(Image)`
  position: absolute;
  bottom: -40px;
  right: -130px;
  opacity: 20%;
  @media (${Styles.devices.tablet}) {
    top: -100px;
    right: 0px;
    left: 0px;
    margin: 0 auto;
  }
`;
export const StyledMaskTechnologyInvert = styled(Image)`
  position: absolute;
  bottom: 0px;
  left: -40px;
  opacity: 20%;
  @media (${Styles.devices.tablet}) {
    bottom: -50px;
    right: 0px;
    left: -0px;
    margin: 0 auto;
  }
`;