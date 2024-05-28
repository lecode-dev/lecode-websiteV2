'use client';
import Link from 'next/link';
import { Changa } from 'next/font/google';
import { ContactButton, Paragraph1 } from '@/styles/global';
import { ContactLinkContainer, SectionContainer, TeamContainer, Container, Button, Overlay, OverlayText, ButtonContainer } from './style';
import { members } from './teamMembers';

const changa = Changa({ weight: ['500'], style: ['normal'], subsets: ['latin'], display: 'swap' });

export const TeamLecodeContainer = () => {
  return (
    <SectionContainer>
      <ContactLinkContainer>
      <h2>Encontre o seu time ideal</h2>
      <p>Uma equipe completa, com a expertise que você precisa para alavancar suas ideias.</p>
      <ContactButton>
        <Link href='#contact'>Veja os detalhes da equipe </Link>
      </ContactButton>
      </ContactLinkContainer>
      <TeamContainer>
        {members.map((item) => {
          return (
      <Container>
      {item.img}
      <ButtonContainer>
      <p className={changa.className}>{item.name}</p>
      <Button>Expertise</Button>
      </ButtonContainer>
      <Overlay>
      <OverlayText>
        {item.expertise.map((i) => <li>{i}</li>)}
        </OverlayText>
      </Overlay>
    </Container>
 )
        })}
      </TeamContainer>
    </SectionContainer>
  );
};
