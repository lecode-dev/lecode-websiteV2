'use client';

import React from 'react';
import type { EmblaOptionsType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import { CarouselSection, CarouselViewport, CarouselContainer, CarouselSlide } from './styles';

interface PropType {
  slides: React.ReactNode[];
}

export const Carousel: React.FC<PropType> = ({ slides }) => {
  const options: EmblaOptionsType = {
    align: 'start',
    dragFree: true,
  };
  const [emblaRef] = useEmblaCarousel(options);

  return (
    <CarouselSection>
      <CarouselViewport ref={emblaRef}>
        <CarouselContainer>
          {slides.map((slide, index) => (
            <CarouselSlide key={index}>{slide}</CarouselSlide>
          ))}
        </CarouselContainer>
      </CarouselViewport>
    </CarouselSection>
  );
};
