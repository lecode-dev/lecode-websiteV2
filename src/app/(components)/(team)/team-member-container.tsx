'use client';
import { ContactTeam } from "@/components/TeamSection/contact-session";
import { TeamLecode, type TeamMembersProps } from "@/components/TeamSection/team-section";
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
            key={profileId}
          />
        ))}
      </>
    </SectionContainer>
  );
};
