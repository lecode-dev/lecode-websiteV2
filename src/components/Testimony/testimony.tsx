import LecodeTestimonyLogo from '@/imgs/lecode-testimony.svg';
import {
  ComponentContainer,
  ClientContainer,
  FeedbackContainer,
  CardContainer,
  ClientImage,
  Logo,
  ClientData,
} from './styles';
import { Paragraph1, Paragraph2, Subtitle2 } from '@/styles/global';

export interface TestimonyProps {
  testimony: {
    client: {
      name: string;
      company: string;
      role: string;
      img: string;
    };
    text: string;
  };
  oddEven?: boolean;
}

export const Testimony = ({ testimony, oddEven = false, ...props }: TestimonyProps) => {
  const { client, text } = testimony;

  return (
    <ComponentContainer oddEven={oddEven}>
      <CardContainer>
        <ClientContainer>
          <ClientImage src={client.img} />
          <ClientData>
            <Subtitle2>{client.company}</Subtitle2>
            <Paragraph2>{client.name}</Paragraph2>
            <Paragraph1>{client.role}</Paragraph1>
          </ClientData>
        </ClientContainer>
        <FeedbackContainer>
          <p>{text}</p>
        </FeedbackContainer>
      </CardContainer>
      <Logo
        src={LecodeTestimonyLogo.src}
        alt='lecode-testimony-logo'
      />
    </ComponentContainer>
  );
};
