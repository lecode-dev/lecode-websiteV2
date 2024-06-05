import { Navbar } from '@/components/Navbar';
import { Form } from '@/components/Form';
import { Footer } from '@/components/footer/footer';
import { TechnologyBanner } from '@/components/TechnologyBanner';
import { TestimonyContainer } from './(components)/(testimony)/testimony-container';
import { TestimonyData } from './(data)/(mock)/testimonies';
import { Body, ScrollbarWrapper } from './(components)/(body)/body';

export default function Home() {
  return (
    <main>
      <Navbar />
      <ScrollbarWrapper>
        <Body>
          <TechnologyBanner
          id='technologies'
          />
          <TestimonyContainer
            id='clients'
            testimonies={TestimonyData}
          />
        </Body>
      </ScrollbarWrapper>
    </main>
  );
}
