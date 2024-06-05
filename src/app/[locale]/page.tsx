import { Navbar } from '@/components/Navbar';
import { TestimonyContainer } from '@/app/(components)/(testimony)/testimony-container';
import { TestimonyData } from '@/app/(data)/(mock)/testimonies';
import { Content, ScrollbarWrapper } from '@/app/(components)/(body)/body';
import { Form } from '@/components/Form';
import { Footer } from '@/components/Footer';

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
          <Form />
          <Footer />
        </Content>
      </ScrollbarWrapper>
    </main>
  );
}
