'use client';

import { SectionContainer, TitleContainer, TestimoniesContainer, Mask } from './styles';
import { Testimony, TestimonyProps } from '@/components/Testimony/testimony';
import TechnologyMask from '@/imgs/technology-mask.png';

interface TestimonyContainerProps {
  testimonies: ({ id: string } & TestimonyProps)[];
}

export const TestimonyContainer = ({ testimonies }: TestimonyContainerProps) => {
  return (
    <SectionContainer>
      <TitleContainer>
        <h1>Depoimentos</h1>
      </TitleContainer>
      <TestimoniesContainer>
        {testimonies.map(({ id, testimony }, index) => (
          <Testimony
            key={id}
            testimony={testimony}
            oddEven={index % 2 === 0}
          />
        ))}
      </TestimoniesContainer>
      <Mask
        src={TechnologyMask.src}
        alt='technology mask'
      />
    </SectionContainer>
  );
};
