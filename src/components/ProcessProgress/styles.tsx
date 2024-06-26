import styled from 'styled-components';
import Image from 'next/image';
import { Header1, Paragraph1, Subtitle } from '@/styles';

export const SessionProcessProgress = styled.div``;

export const MainTextContainer = styled.div`
  background: ${({ theme }) => theme.colors.white};
  padding-top: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const CenterContainerText = styled.div`
  height: 200px;
  width: 980px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const TextRow = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;
interface LearnAboutTextProps {
  color?: string;
}
export const LearnAboutText = styled(Header1)<LearnAboutTextProps>`
  text-align: center;
  padding-right: 1rem;
  color: ${({ color, theme }) => (color === 'green' ? theme.colors.mainGreen : theme.colors.black)};
`;
export const WrapContainer = styled.div`
  display: flex;
`;

export const ProcessProgressContainer = styled.div`
  height: 380px;
  background: ${({ theme }) => theme.colors.mainBack};
  overflow: hidden;
`;

export const ContainerSelectedNode = styled.div``;

export const CardSelectedNode = styled.div`
  height: 200px;
  width: 240px;
  display: flex;
  border: 1px solid red;
  justify-content: space-between;
  position: relative;
`;

export const NumberText = styled(Header1)`
  color: ${({ theme }) => theme.colors.mainGreen};
`;
export const TextContentArea = styled.div`
  height: 240px;
  width: 184px;
  display: flex;
  flex-direction: column;
`;

export const TitleCard = styled(Subtitle)`
  color: ${({ theme }) => theme.colors.white};
`;

export const SubTitleCard = styled(Paragraph1)`
  color: ${({ theme }) => theme.colors.white};
`;



export const LeCodeLogoBackground = styled(Image)`
  position: absolute; 
  top: -20%;
  left: 20%;
`;
