import { Navbar } from '@/components/Navbar';
import { TestimonyContainer } from '@/app/(components)/(testimony)/testimony-container';
import { TestimonyData } from '@/app/(data)/(mock)/testimonies';
import { Body, ScrollbarWrapper } from '@/app/(components)/(body)/body';

export default function Home() {
  return (
    <main>
      <Navbar />
      <ScrollbarWrapper>
        <Body>
          <TestimonyContainer
            id='clients'
            testimonies={TestimonyData}
          />
        </Body>
      </ScrollbarWrapper>
    </main>
  );
}
