import Image from 'next/image';
import LecodeTestimonyLogo from '@/imgs/lecode-testimony.svg';
import { Container, ClientContainer, FeedbackContainer, TestimonyContainer, ClientImage } from './styles';

export interface TestimonyProps {
  client: {
    name: string;
    company: string;
    role: string;
    img: any;
  };
  text: string;
}

export const Testimony = ({ client, text }: TestimonyProps) => {
  return (
    <Container>
      <Image
        src={LecodeTestimonyLogo}
        alt='lecode-testimony-logo'
      />
      <TestimonyContainer>
        <ClientContainer>
          <ClientImage />
          <h3>{client.company}</h3>
          <p>{client.name}</p>
          <p>{client.role}</p>
        </ClientContainer>
        <FeedbackContainer>
          <p>{text}</p>
        </FeedbackContainer>
      </TestimonyContainer>
    </Container>
  );
};
