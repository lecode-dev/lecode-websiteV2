// import { TestimonyContainer } from '@/app/(components)/(testimony)/testimony-container';
// import { TestimonyData } from '@/app/(data)/(mock)/testimonies';
import { Content, ScrollbarWrapper } from '@/app/(components)/(body)/body';
import { Form } from '@/components/Form';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { HeaderMobile } from '@/components/NavbarMobile';
import { TechnologyBanner } from '@/components/TechnologyBanner';
import { Clients } from '@/components/Clients';
import { HeroSection } from '@/components/HeroSection';
import { TeamMembers } from '@/app/(data)/(mock)/team-members';
import { ProcessProgress } from '@/components/ProcessProgress';
import { NewCarousel } from '@/components/NewCarousel';
import { TeamLecodeContainer } from '../(components)/(team)/team-member-container';

export default function Home() {
  return (
    <main>
      <HeaderMobile/>
      <Navbar />
      <ScrollbarWrapper>
        <Content>
          <HeroSection />
          <TechnologyBanner id='technologies' />
          <TeamLecodeContainer
            id='team'
            profiles={TeamMembers}
          />
          <ProcessProgress/>
          <Clients />
          <NewCarousel/>
          {/* <TestimonyContainer testimonies={TestimonyData} /> */}
          <Form />
          <Footer />
        </Content>
      </ScrollbarWrapper>
    </main>
  );
}
