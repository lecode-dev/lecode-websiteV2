'use client';

import { useTranslation } from 'react-i18next';
import { Testimony, type TestimonyProps } from '@/components/Testimony/testimony';
import TechnologyMask from '@/images/technology-mask.png';
import Stroke from '@/images/stroke.svg';
import LecodeLogoBackground from '@/images/lecode-logo-background.svg';
import { Header1 } from '@/styles';
import {
  SectionContainer,
  TitleContainer,
  TestimoniesContainer,
  Mask,
  StrokeImage,
  LogoBackground,
} from './styles';

interface TestimonyContainerProps {
  id: string;
  testimonies: ({ id: string } & TestimonyProps)[];
}

export const TestimonyContainer = ({ id, testimonies }: TestimonyContainerProps) => {

  const { t } = useTranslation();

  const BackgroundLogo = [
    { $top: '-200px', $right: '-50px' },
    { $top: '300px', $left: '-30px', $opacity: '10%' },
    { $bottom: '450px', $right: '100px' },
    { $bottom: '100px', $left: '90px', $opacity: '10%' },
  ];

  return (
    <SectionContainer id={id}>
      <TitleContainer>
        <Header1>{t('testimonials.title')}</Header1>
        <StrokeImage
          src={Stroke}
          alt='stroke'
        />
      </TitleContainer>
      <TestimoniesContainer>
        {testimonies.map(({ id: testimonyId, testimony }, index) => (
          <Testimony
            key={testimonyId}
            testimony={testimony}
            $oddEven={index % 2 === 0}
          />
        ))}
        {BackgroundLogo.map((props, index) => (
          <LogoBackground
            key={`logo-background-${index}`}
            src={LecodeLogoBackground}
            alt={`lecode-logo-background-${index}`}
            {...props}
          />
        ))}
      </TestimoniesContainer>
      <Mask
        src={TechnologyMask}
        alt='technology-mask'
      />
    </SectionContainer>
  );
};
