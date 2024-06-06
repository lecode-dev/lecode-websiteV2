import { Navbar } from '@/components/Navbar';
import { Form } from '@/components/Form';
import { Footer } from '@/components/footer/footer';
import { TestimonyContainer } from './(components)/(testimony)/testimony-container';
import { TestimonyData } from './(data)/(mock)/testimonies';
import { Body, ScrollbarWrapper } from './(components)/(body)/body';
import { TeamMembers } from "./(data)/(mock)/team-members";
import { TeamLecodeContainer } from './(components)/(team)/team-member-container';

export default function Home() {
  return (
    <main>
      <Navbar/>
      <ScrollbarWrapper>
      <Body>
        <TestimonyContainer
          id='clients'
          testimonies={TestimonyData}
        />
        <TeamLecodeContainer id='teamLecode'
        profile={TeamMembers}/>
        <Form />
        <Footer />
      </Body>
      </ScrollbarWrapper>
    </main>
  );
}

