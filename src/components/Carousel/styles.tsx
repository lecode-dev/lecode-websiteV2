import styled from 'styled-components';

export const CarouselSection = styled.section`
  max-width: 90vw;
  margin: auto;
  --slide-height: 19rem;
  --slide-spacing: 2rem;
  --slide-size: 35%;
`;

export const CarouselViewport = styled.div`
  overflow: hidden;
`;

export const CarouselContainer = styled.div`
  backface-visibility: hidden;
  display: flex;
  touch-action: pan-y pinch-zoom;
  margin-left: calc(var(--slide-spacing) * -1);
`;

export const CarouselSlide = styled.div`
  min-width: fit-content;
  padding-left: var(--slide-spacing);
`;
