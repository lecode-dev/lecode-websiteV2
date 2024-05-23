import { Testimony, TestimonyProps } from './testimony';

interface TestimonyContainerProps {
  testimonies: ({ id: string } & TestimonyProps)[];
}

export const TestimonyContainer = ({ testimonies }: TestimonyContainerProps) => {
  return (
    <div>
      {testimonies.map((testimony) => (
        <Testimony
          key={testimony.id}
          client={testimony.client}
          text={testimony.text}
        />
      ))}
    </div>
  );
};
