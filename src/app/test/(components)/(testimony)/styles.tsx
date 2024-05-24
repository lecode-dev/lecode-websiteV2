import { styled } from 'styled-components';

export const SectionContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  padding: 60px 25px 60px 25px;
  overflow: hidden;
`;

export const TitleContainer = styled.div`
  margin-bottom: 100px;
`;

export const TestimoniesContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  gap: 5rem;
`;

export const Mask = styled.img`
  position: absolute;
  bottom: -100px;
  right: -100px;
  opacity: 40%;
`;