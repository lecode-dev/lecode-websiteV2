'use client';
import { TeamLecode, TeamMembersProps } from "@/components/teamSection/teamSection";
import { ContactTeam } from '@/components/teamSection/contactSession';
import { SectionContainer } from "./style";

interface TeamLecodeContainerProps {
  id: string;
  profile: ({ id: string } & TeamMembersProps)[];
}

export const TeamLecodeContainer = ({ id, profile }: TeamLecodeContainerProps) => {
  return (
    <SectionContainer id={id}>
      <ContactTeam />
      <>
        {profile.map(({ id: profileId, profile }) => (
          <TeamLecode
            id={profileId}
            profile={profile}
          />
        ))}
      </>
    </SectionContainer>
  );
};
