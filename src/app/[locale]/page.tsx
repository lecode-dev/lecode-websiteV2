import { Navbar } from '@/components/Navbar';
import { TestimonyContainer } from '@/app/(components)/(testimony)/testimony-container';
import { TestimonyData } from '@/app/(data)/(mock)/testimonies';
import { Content, ScrollbarWrapper } from '@/app/(components)/(body)/body';
import { Form } from '@/components/Form';
import { Footer } from '@/components/Footer';
import { Clients } from '@/components/Clients';

export default function Home() {
  return (
    <main>
      <Navbar />
      <ScrollbarWrapper>
        <Content>
          <Clients />
          <TestimonyContainer
            testimonies={TestimonyData}
          />
          <Form />
          <Footer />
        </Content>
      </ScrollbarWrapper>
    </main>
  );
}
