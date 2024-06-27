import styled from 'styled-components';
import { Header1,  } from '@/styles';

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

export const ContainerSelected = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 400px;
`;
