import { TestimonyContainer } from '@/app/(components)/(testimony)/testimony-container';
import { TestimonyData } from '@/app/(data)/(mock)/testimonies';
import { Content, ScrollbarWrapper } from '@/app/(components)/(body)/body';
import { Form } from '@/components/Form';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { TechnologyBanner } from '@/components/TechnologyBanner';
import { Clients } from '@/components/Clients';
import { HeroSection } from '@/components/HeroSection';
import { TeamMembers } from '@/app/(data)/(mock)/team-members';
import { TeamLecodeContainer } from '../(components)/(team)/team-member-container';

export default function Home() {
  return (
    <main>
      <Navbar />
      <ScrollbarWrapper>
        <Content>
          <HeroSection />
          <TechnologyBanner id='technologies' />
          <TeamLecodeContainer
            id='team'
            profiles={TeamMembers}
          />
          <Clients />
          <TestimonyContainer testimonies={TestimonyData} />
          <Form />
          <Footer />
        </Content>
      </ScrollbarWrapper>
    </main>
  );
}
