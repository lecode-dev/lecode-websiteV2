import { Header1, Subtitle,Header32 } from '@/styles';
import styled from 'styled-components';

export const TechnologyContainer = styled.div`
  height: 878px;
  padding-top: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.mainBlack};
`;
export const ContainerMainText = styled.div`
  width: 850px;
  height: 200px;
 margin-bottom: 84px;
`;
interface LearnAboutTextProps {
  color?: string;
}
export const TextRow = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const LearnAboutText = styled(Header1)<LearnAboutTextProps>`
  text-align: center;
  padding-right:1rem;
  color: ${({ color, theme }) => (color === 'green' ? theme.colors.mainGreen : theme.colors.white)};
  text-shadow: 0px 0px 5px ${({ theme }) => theme.colors.mainGreen}; 
`;
export const ContainerSubText = styled.div`
  border: 5px solid purple;
  margin-top:1rem;
 
`;
export const MoreTechnologiesText = styled(Subtitle)`
color: ${({ theme }) => theme.colors.white};
text-align: center;
padding-top: 0.5rem;
text-shadow: 0px 0px 5px ${({ theme }) => theme.colors.mainGreen}; 
`;

export const ContainerTechnology = styled.div`
  width: 1440px;
  height: 540px;
  border: 5px solid red;
`;
