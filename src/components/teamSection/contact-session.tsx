import Link from "next/link";
import TechnologyMask from '@/images/technology-mask.png';
import { ContactButton } from "../ContactButton";
import { BgImage, ContactContainer, Header, Paragraph } from "./style";


export const ContactTeam = () => {
  return (
    <ContactContainer>
    <Header>Encontre o seu time ideal</Header>
    <Paragraph>
      Uma equipe completa, com a expertise que você precisa para alavancar suas ideias.
    </Paragraph>
    <ContactButton>
      <Link
        href='#contact'
      >
        Veja os detalhes da equipe{' '}
      </Link>
    </ContactButton>
    <BgImage
    src={TechnologyMask}
    alt='Background Image'
    />
    </ContactContainer> 
  );
}
