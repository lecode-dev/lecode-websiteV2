'use client';
import Link from 'next/link';
import { Changa, Poppins } from 'next/font/google';
import type { StaticImageData } from 'next/image';
import {
  ContactLinkContainer,
  SectionContainer,
  TeamContainer,
  MemberContainer,
  ButtonContainer,
  MemberTeamName,
  Paragraph1Styled,
  StyledHeader2,
  StyledMask,
} from './style';
import { ContactButton } from '../ContactButton';
import TechnologyMask from '@/imgs/technology-mask.png';

const changa = Changa({ weight: ['500'], style: ['normal'], subsets: ['latin'], display: 'swap' });
const poppins = Poppins({ weight: ['700'], style: ['normal'], subsets: ['latin'], display: 'swap' });

export interface TeamMembersProps {
  id: string
  profile: {name: string; charge: string; img: StaticImageData };
}

interface TeamLecodeContainerProps {
  id: string;
  profile: TeamMembersProps[];
}

export const TeamLecodeContainer = ({ id , profile }: TeamLecodeContainerProps) => {
  return (
    <SectionContainer id={id}>
      <ContactLinkContainer>
        <StyledHeader2>Encontre o seu time ideal</StyledHeader2>
        <Paragraph1Styled>
          Uma equipe completa, com a expertise que você precisa para alavancar suas ideias.
        </Paragraph1Styled>
        <ContactButton>
          <Link
            href='#contact'
            className={poppins.className}
          >
            Veja os detalhes da equipe{' '}
          </Link>
        </ContactButton>
        <StyledMask
        src={TechnologyMask}
        alt='technology-mask'
        objectFit='cover'
      />
      </ContactLinkContainer>
      <TeamContainer>
        <MemberContainer>
          <ButtonContainer>
                {/* <MemberTeamName className={changa.className}>{}</MemberTeamName> */}
              </ButtonContainer>
            </MemberContainer>
      </TeamContainer>
    </SectionContainer>
  );
};
