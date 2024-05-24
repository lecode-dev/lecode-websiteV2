import styled from 'styled-components';

interface ComponentProps {
  oddEven: boolean;
}

export const ComponentContainer = styled.div<ComponentProps>(({ oddEven = false }) => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
  left: oddEven ? '20%' : '50%',
}));

export const Logo = styled.img`
  position: absolute;
  top: -100px;
  left: -75px;
  z-index: -1;
  display: flex;
  width: 144px;
  height: 176px;
  justify-content: center;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 18px;
`;

export const ClientContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const ClientData = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const ClientImage = styled.img`
  width: 192px;
  height: 176px;
  object-fit: contain;
`;

export const FeedbackContainer = styled.div`
  max-width: 400px;
  text-align: justify;
`;
