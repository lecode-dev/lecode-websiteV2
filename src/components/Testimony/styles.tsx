import { Subtitle2 } from '@/styles/global';
import styled from 'styled-components';
import Image from 'next/image';

interface ComponentProps {
  oddEven: boolean;
}

export const ComponentContainer = styled.div<ComponentProps>(({ oddEven = false }) => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
  left: oddEven ? '20%' : '50%',
}));

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 18px;
`;

export const ClientContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  ${Subtitle2} {
    color: ${({ theme }) => theme.colors['main-green']};
  }
`;

export const FeedbackContainer = styled.div`
  max-width: 500px;
  text-align: justify;
`;

export const ClientData = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const ClientImage = styled(Image)`
  width: 192px;
  height: 176px;
`;

export const Logo = styled(Image)`
  position: absolute;
  top: -100px;
  left: -75px;
  z-index: -1;
  display: flex;
  width: 144px;
  height: 176px;
  justify-content: center;
`;
