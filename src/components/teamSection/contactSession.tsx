import Link from "next/link";
import { ContactButton } from "../ContactButton";
// import { ContactLinkContainer, Paragraph1Styled, StyledMask } from "./style";
import TechnologyMask from '@/imgs/technology-mask.png';

export const ContactTeam = () => {
  return (
    <div>
    <>Encontre o seu time ideal</>
    <div>
      Uma equipe completa, com a expertise que você precisa para alavancar suas ideias.
    </div>
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
    </div> 
  );
}
