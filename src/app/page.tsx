import { Navbar } from '@/components/Navbar';
import { TestimonyContainer } from './(components)/(testimony)/testimony-container';
import { TestimonyData } from './(data)/(mock)/testimonies';
import { Body, ScrollbarWrapper } from './(components)/(body)/body';
import { Footer } from '@/components/footer/footer';

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
        <Footer />
      </Body>
      </ScrollbarWrapper>
    </main>
  );
}
