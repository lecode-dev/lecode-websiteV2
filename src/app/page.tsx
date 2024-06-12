import { Navbar } from '@/components/Navbar';
import { Form } from '@/components/Form';
import { Footer } from '@/components/footer/footer';
import { HeroSection } from '@/components/HeroSection/hero-section';
import { TestimonyContainer } from './(components)/(testimony)/testimony-container';
import { TestimonyData } from './(data)/(mock)/testimonies';
import { Body, ScrollbarWrapper } from './(components)/(body)/body';

export default function Home() {
  return (
    <main>
      <Navbar/>
      <ScrollbarWrapper>
      <Body>
        <HeroSection />
        <TestimonyContainer
          id='clients'
          testimonies={TestimonyData}
        />
        <Form />
        <Footer />
      </Body>
      </ScrollbarWrapper>
    </main>
  );
}
