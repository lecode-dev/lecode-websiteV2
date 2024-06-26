import styled from 'styled-components';
import Image from 'next/image';
import { Header1, Paragraph1, Subtitle } from '@/styles';

export const CardContainer = styled.div`
  height: 200px;
  width: 240px;
  display: flex;
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