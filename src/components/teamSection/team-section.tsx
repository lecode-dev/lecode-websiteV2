'use client';
import Image from 'next/image';
import { MemberName } from './style';

export interface TeamMembersProps {
  id: string
  profile: {name: string; charge: string; img: any, expertise: any[] };
}

export const TeamLecode = ({ id , profile }: TeamMembersProps) => {
  return (
    <div id={id}>
      <div>
        <div>
              <Image src={profile.img} alt='Profile picture of an person in black and white' />
             <MemberName>{profile.name}</MemberName> 
             {profile.charge}
              {profile.expertise.map((item: any) => <Image src={item} alt='' key={id} width={20} height={20}/>)}
            </div>
      </div>
    </div>
  );
};
