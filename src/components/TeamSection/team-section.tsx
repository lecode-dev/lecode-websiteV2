'use client';
import Image from 'next/image';
import type { StaticImageData } from 'next/image';
import { MemberName, Subparagraph, ProfileContainer, ProfilePicture, ExpertiseContainer, NameAndExpertiseContainer, TechnologyContainer } from './style';

export interface TeamMembersProps {
  id: string;
  profile: { name: string; charge: string; img: StaticImageData; expertise: any[] };
}

export const TeamLecode = ({ id, profile }: TeamMembersProps) => {
  return (
    <div id={id}>
      <ProfileContainer>
        <ProfilePicture
          src={profile.img}
          alt='Profile picture of an person in black and white'
        />
        <NameAndExpertiseContainer>
        <MemberName>{profile.name}</MemberName>
        <ExpertiseContainer>
          <Subparagraph>{profile.charge}</Subparagraph>
          <TechnologyContainer>
          {profile.expertise.map((item: any) => (
            <Image
              src={item}
              alt='technologies icons'
              key={id}
              width={20}
              height={20}
            />
          ))}
          </TechnologyContainer>
        </ExpertiseContainer>
        </NameAndExpertiseContainer>
        
      </ProfileContainer>
    </div>
  );
};
