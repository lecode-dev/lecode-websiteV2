'use client';
import { TeamLecode, type  TeamMembersProps} from '@/components/TeamSection/teamSection';

interface TeamLecodeContainerProps {
  id: string;
  profile: ({ id: string } & TeamMembersProps)[];
}

export const TeamLecodeContainer = ({ id, profile }: TeamLecodeContainerProps) => {
  return (
    <div id={id}>
      <div>
        {profile.map(({ id: profileId, profile }) => (
          <TeamLecode
            id={profileId}
            profile={profile}
          />
        ))}
      </div>
    </div>
  );
};
