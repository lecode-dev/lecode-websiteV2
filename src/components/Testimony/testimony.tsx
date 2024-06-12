import type { StaticImageData } from 'next/image';
import LecodeTestimonyLogo from '@/imgs/lecode-logo-testimony.svg';
import {
  ComponentContainer,
  ClientContainer,
  FeedbackContainer,
  CardContainer,
  ClientImage,
  Logo,
  ClientData,
  Paragraph,
  CompanyName,
  ClientName,
  ClientRole,
} from './styles';

export interface TestimonyProps {
  testimony: {
    client: {
      name: string;
      company: string;
      role: string;
      img: StaticImageData;
    };
    text: string;
  };
  $oddEven?: boolean;
}

export const Testimony = ({ testimony, $oddEven = false }: TestimonyProps) => {
  const { client, text } = testimony;

  return (
    <ComponentContainer $oddEven={$oddEven}>
      <CardContainer>
        <ClientContainer>
          <ClientImage
            src={client.img}
            alt='client-image'
          />
          <ClientData>
            <CompanyName>{client.company}</CompanyName>
            <ClientName>{client.name}</ClientName>
            <ClientRole>{client.role}</ClientRole>
          </ClientData>
        </ClientContainer>
        <FeedbackContainer>
          <Paragraph>{text}</Paragraph>
        </FeedbackContainer>
      </CardContainer>
      <Logo
        src={LecodeTestimonyLogo}
        alt='lecode-testimony-logo'
      />
    </ComponentContainer>
  );
};
