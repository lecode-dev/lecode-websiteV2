import Image from 'next/image';
import styled from 'styled-components';

export const TeamContainer = styled.div`
  display: flex;
  gap: 1.5625rem;

  @media (max-width: 1280px) {
    display: none;
  }
`;
export const ContactLinkContainer = styled.div`
  background: #161918;
`;

export const SectionContainer = styled.div`
  width: 100vw;
  height: fit-content;
  display: flex;
`;
export const ImageStyled = styled(Image)`
  cursor: pointer;
  width: 100px;
  height: 100px;
`;

export const ExpertiseButtonn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  background-color: #fff;
  border: none;
  cursor: pointer;
  padding: 0.625rem;
  font-size: 16px;
  color: #333;
  transition: transform 0.3s ease;
  gap: 0.625rem;
  border-radius: 1.25rem;
  border: 1px solid var(--preto-principal, #161918);
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100px;
  height: 100px;
  background-color: rgba(255, 255, 255, 0.7);
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;

  ${Container}:hover & {
    opacity: 1;
  }
`;

export const OverlayText = styled.li`
  font-size: 14px;
  text-align: center;
`;

export const ButtonContainer = styled.div `
display: flex;
`