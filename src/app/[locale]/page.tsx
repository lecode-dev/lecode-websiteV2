import { TestimonyContainer } from '@/app/(components)/(testimony)/testimony-container';
import { TestimonyData } from '@/app/(data)/(mock)/testimonies';
import { Content, ScrollbarWrapper } from '@/app/(components)/(body)/body';
import { Form } from '@/components/Form';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { TeamMembers } from '../(data)/(mock)/team-members';
import { TeamLecodeContainer } from '../(components)/(team)/team-member-container';

export default function Home() {
  return (
    <main>
      <Navbar />
      <ScrollbarWrapper>
        <Content>
          <TestimonyContainer
            id='clients'
            testimonies={TestimonyData}
          />
          <TeamLecodeContainer
            id='team'
            profiles={TeamMembers}
          />
          <Form />
          <Footer />
        </Content>
      </ScrollbarWrapper>
    </main>
  );
}
