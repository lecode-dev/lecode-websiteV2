import { Navbar } from '@/components/Navbar';
import { TestimonyContainer } from './(components)/(testimony)/testimony-container';
import { TestimonyData } from './(data)/(mock)/testimonies';
import { Body, ScrollbarWrapper } from './(components)/(body)/body';
import { TechnologyBanner } from '@/components/TechnologyBanner';

export default function Home() {
  return (
    <main>
      <Navbar />
      <ScrollbarWrapper>
        <Body>
          <TechnologyBanner />
          <TestimonyContainer
            id='clients'
            testimonies={TestimonyData}
          />
        </Body>
      </ScrollbarWrapper>
    </main>
  );
}
