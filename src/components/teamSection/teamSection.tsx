'use client';
import Link from 'next/link';
import { ContactButton } from '@/styles/global';
import { ContactLinkContainer, ExpertiseButtonn, HiddenDiv, SectionContainer, TeamContainer } from './style';
import { members } from './teamMembers';

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
            <>
           <div>{item.name}</div> 
           <div>
           <div>{item.img}</div>
           <ExpertiseButtonn> Expertise </ExpertiseButtonn>
          {item.expertise.map((i) => <HiddenDiv>{i}</HiddenDiv>)}
           </div>
           <div>{item.charge}</div> 
            </>
          )
        })}
      </TeamContainer>
    </SectionContainer>
  );
};
