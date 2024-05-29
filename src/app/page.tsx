import { Navbar } from "@/components/Navbar";
import { TeamLecodeContainer } from "@/components/teamSection/teamSection";
import { Navbar } from '@/components/Navbar';
import { TestimonyContainer } from './(components)/(testimony)/testimony-container';
import { TestimonyData } from './(data)/(mock)/testimonies';
import { Body } from './(components)/(body)/body';

export default function Home() {
  return (
    <main>
      {/* <Navbar /> */}
      <TeamLecodeContainer />
      <Navbar />
      <Body>
        <TestimonyContainer
          id='clients'
          testimonies={TestimonyData}
        />
      </Body>
    </main>
  );
}
