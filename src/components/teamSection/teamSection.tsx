'use client';
import Image from 'next/image';
import Link from 'next/link';
import { ContactButton } from '@/styles/global';
import { ContactLinkContainer, SectionContainer, TeamContainer } from './style';
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
           <ul>
          {item.expertise.map((i) => <li>{i}</li>)}
           </ul>
           <div>{item.charge}</div> 
           <div>{item.img}</div>
            </>
          )
        })}
      </TeamContainer>
    </SectionContainer>
  );
};
