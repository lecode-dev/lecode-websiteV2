'use client';
import Link from 'next/link';
import { Changa } from 'next/font/google';
import {
  ContactLinkContainer,
  SectionContainer,
  TeamContainer,
  MemberContainer,
  ExpertiseButton,
  Overlay,
  OverlayText,
  ButtonContainer,
  MemberTeamName,Paragraph1Styled,
  StyledHeader2
} from './style';
import { members } from './teamMembers';
import { ContactButton } from '../ContactButton';

const changa = Changa({ weight: ['600'], style: ['normal'], subsets: ['latin'], display: 'swap' });

export const TeamLecodeContainer = () => {
  return (
    <SectionContainer>
      <ContactLinkContainer>
        <StyledHeader2>Encontre o seu time ideal</StyledHeader2>
        <Paragraph1Styled>Uma equipe completa, com a expertise que você precisa para alavancar suas ideias.</Paragraph1Styled>
        <ContactButton>
          <Link href='#contact' >Veja os detalhes da equipe </Link>
        </ContactButton>
      </ContactLinkContainer>
      <TeamContainer>
        {members.map((item) => {
          return (
            <MemberContainer>
              {item.img}
              <ButtonContainer>
                <MemberTeamName className={changa.className}>{item.name}</MemberTeamName>
                <ExpertiseButton>Expertise</ExpertiseButton>
              </ButtonContainer>
              <Overlay>
                <OverlayText>
                  {item.expertise.map((i) => (
                    <p>{i}</p>
                  ))}
                </OverlayText>
              </Overlay>
            </MemberContainer>
          );
        })}
      </TeamContainer>
    </SectionContainer>
  );
};
