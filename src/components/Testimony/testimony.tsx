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

export const Testimony = ({ testimony, oddEven = false }: TestimonyProps) => {
  const { client, text } = testimony;

  return (
    <ComponentContainer oddEven={oddEven}>
      <CardContainer>
        <ClientContainer>
          <ClientImage src={client.img} />
          <ClientData>
            <h3>{client.company}</h3>
            <p>{client.name}</p>
            <p>{client.role}</p>
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
