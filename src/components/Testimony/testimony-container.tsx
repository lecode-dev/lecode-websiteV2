import { TechnologyMaskImage, TestimonyGrid } from './container-styles';
import { Testimony, TestimonyProps } from './testimony';
import TechnologyMask from '@/imgs/technology-mask.png';

interface TestimonyContainerProps {
  testimonies: ({ id: string } & TestimonyProps)[];
}

export const TestimonyContainer = ({ testimonies }: TestimonyContainerProps) => {
  return (
    <TestimonyGrid>
      {testimonies.map((testimony) => (
        <Testimony
          key={testimony.id}
          client={testimony.client}
          text={testimony.text}
        />
      ))}
      <TechnologyMaskImage src={TechnologyMask.src} alt="technology mask" />
    </TestimonyGrid>
  );
};
