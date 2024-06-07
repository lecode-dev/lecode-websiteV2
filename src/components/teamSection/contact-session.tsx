import TechnologyMask from '@/images/technology-mask.png';
import { ContactButton } from '../ContactButton';
import { BgImage, ContactContainer, Header, Paragraph, TextContainer, StyledLink } from './style';

export const ContactTeam = () => {
  return (
    <ContactContainer>
      <TextContainer>
        <Header>Encontre o seu time ideal</Header>
        <Paragraph>Uma equipe completa, com a expertise que você precisa para alavancar suas ideias.</Paragraph>
      </TextContainer>
      <ContactButton>
        <StyledLink href='#contact'>Veja os detalhes da equipe </StyledLink>
      </ContactButton>
      <BgImage
        src={TechnologyMask}
        alt='Background Image'
      />
    </ContactContainer>
  );
};
