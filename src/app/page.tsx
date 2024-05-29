import { TeamLecodeContainer } from "@/components/TeamSection/teamSection";
import { Navbar } from '@/components/Navbar';
import { TestimonyContainer } from './(components)/(testimony)/testimony-container';
import { TestimonyData } from './(data)/(mock)/testimonies';
import { Body } from './(components)/(body)/body';
import { TeamMembers } from "./(data)/(mock)/teamMembers";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Body>
        <TestimonyContainer
          id='clients'
          testimonies={TestimonyData}
        />
       <TeamLecodeContainer 
        id='team'
        profile={TeamMembers}
       />
      </Body>
    </main>
  );
}
