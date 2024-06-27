import styled from 'styled-components';
import Image from 'next/image';
import { Styles, Header1, Paragraph1, Subtitle } from '@/styles';

export const CardContainer = styled.div`
  height: 200px;
  width: 240px;
  display: flex;
  gap: 1rem;
  position: relative;
  @media (${Styles.devices.laptop}) {
    width: 180px;
    height: 180px;
  }
`;

export const NumberText = styled(Header1)`
  color: ${({ theme }) => theme.colors.mainGreen};
  @media (${Styles.devices.laptop}) {
    font-size: 1.5rem;
  }
`;
export const TextContentArea = styled.div`
  height: 240px;
  width: 184px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  @media (${Styles.devices.laptop}) {
    width: 160px;
    height: 200px;
  }
`;

export const TitleCard = styled(Subtitle)`
  color: ${({ theme }) => theme.colors.white};
  @media (${Styles.devices.laptop}) {
    font-size: 1rem;
  }
`;

export const SubTitleCard = styled(Paragraph1)`
  color: ${({ theme }) => theme.colors.white};
  @media (${Styles.devices.laptop}) {
    font-size: 0.875rem;
  }
`;

export const LeCodeLogoBackground = styled(Image)`
  position: absolute;
  top: -20%;
  left: 10%;
  @media (${Styles.devices.laptop}) {
    top: -30%; 
    left: 10%; 
    width: 95%; 
  }
`;
