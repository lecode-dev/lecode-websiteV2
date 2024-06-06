import Link from "next/link";
import { ContactButton } from "../ContactButton";
import { ContactContainer, Header, Paragraph } from "./style";


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
    {/* <StyledMask
    src={TechnologyMask}
    alt='technology-mask'
    objectFit='cover'
    /> */}

    </ContactContainer> 
  );
}
