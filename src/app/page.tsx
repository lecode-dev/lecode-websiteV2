import { Navbar } from '@/components/Navbar';
import { Form } from '@/components/Form';
import { TestimonyContainer } from './(components)/(testimony)/testimony-container';
import { TestimonyData } from './(data)/(mock)/testimonies';
import { Body, ScrollbarWrapper } from './(components)/(body)/body';
import { Footer } from '@/components/Footer/footer';

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
      </Body>
      <Form />
      <Footer />
      </ScrollbarWrapper>
    </main>
  );
}
