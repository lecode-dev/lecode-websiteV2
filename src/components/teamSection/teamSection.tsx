'use client';
import type { StaticImageData } from 'next/image';
import {
  SectionContainer,
  TeamContainer,
  MemberContainer,
} from './style';

export interface TeamMembersProps {
  id: string
  profile: {name: string; charge: string; img: StaticImageData };
}

export const TeamLecode = ({ id , profile }: TeamMembersProps) => {
  return (
    <SectionContainer id={id}>
      <TeamContainer>
        <MemberContainer>
              {profile.name}
            </MemberContainer>
      </TeamContainer>
    </SectionContainer>
  );
};
