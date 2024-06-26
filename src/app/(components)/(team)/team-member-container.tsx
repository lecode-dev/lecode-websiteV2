'use client';
import { ContactTeam, TeamLecode, type TeamMembersProps } from "@/components/TeamSection";
import { MemberContainer, SectionContainer } from "./style";

interface TeamLecodeContainerProps {
  id: string;
  profiles: ({ id: string } & TeamMembersProps)[];
}

export const TeamLecodeContainer = ({ id, profiles }: TeamLecodeContainerProps) => {
  return (
    <SectionContainer id={id}>
      <ContactTeam />
      <MemberContainer>
        {profiles.map(({ id: profileId,  profile }) => (
          <TeamLecode
            id={profileId}
            profile={profile}
            key={profileId}
          />
        ))}
      </MemberContainer>
    </SectionContainer>
  );
};
