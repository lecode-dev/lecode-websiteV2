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
import { Paragraph2 } from '@/styles/global';

export interface TestimonyProps {
  testimony: {
    client: {
      name: string;
      company: string;
      role: string;
      img: any;
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
          <ClientImage 
            src={client.img} 
            alt='client-image'
          />
          <ClientData>
            <p>{client.company}</p>
            <p>{client.name}</p>
            <p>{client.role}</p>
          </ClientData>
        </ClientContainer>
        <FeedbackContainer>
          <Paragraph2>{text}</Paragraph2>
        </FeedbackContainer>
      </CardContainer>
      <Logo
        src={LecodeTestimonyLogo}
        alt='lecode-testimony-logo'
      />
    </ComponentContainer>
  );
};
