'use client';

import Image from 'next/image';
import HeroImg from '../../images/hero-image.png';
import HeroGroupImgLeft from '../../images/hero-group-left.svg';
import RetangleWithGreenShadow from '../../images/rectangle-with-green-shadow.svg';
import HeroGroupSecundaryImgLeft from '../../images/hero-group-secundary-left.svg';
import HeroGroupImgRight from '../../images/hero-group-right.svg';
import HeroGroupSecundaryImgRight from '../../images/hero-group-secundary-right.svg';
import ChartLineIcon from '../../images/chart-line.svg';
import PuzzleIcon from '../../images/module-puzzle.svg';
import UserIcon from '../../images/user-expert.svg';
import TimeIcon from '../../images/subway-time.svg';
import Stroke from '../../images/stroke.svg';
import {
  Card,
  CardDescription,
  CardTitle,
  CardsContainer,
  Container,
  HeroGroupImageLeft,
  HeroGroupImageRight,
  HeroGroupSecundaryImageLeft,
  HeroGroupSecundaryImageRight,
  HeroImage,
  ImagesContainer,
  RectangleWithGreenStroke,
  SectionContainer,
  SpanWithStroke,
  Title,
  TitleContainer,
} from './styles';

export const HeroSection = () => {
  return (
    <Container>
      <SectionContainer>
        <TitleContainer>
          <Title>
            Somos uma{' '}
            <span>
              {' '}
              <SpanWithStroke>
                consultoria{' '}
                <Image
                  src={Stroke}
                  alt='Stroke'
                />
              </SpanWithStroke>{' '}
              Outsourcing
            </span>{' '}
            que se encaixa no seu <span>Negócio</span>
          </Title>
        </TitleContainer>
        <ImagesContainer>
          <HeroGroupImageLeft
            src={HeroGroupImgLeft}
            alt='Hero Image Left'
          />
          
          <HeroGroupSecundaryImageLeft
            src={HeroGroupSecundaryImgLeft}
            alt='Hero Image Left'
          />

          <HeroImage
            src={HeroImg}
            alt='Hero Image'
          />

          <RectangleWithGreenStroke
            src={RetangleWithGreenShadow}
            alt='Rectangle With Green Stroke'
          />

          <HeroGroupSecundaryImageRight
            src={HeroGroupSecundaryImgRight}
            alt='Hero Image Right'
          />
          
          <HeroGroupImageRight
            src={HeroGroupImgRight}
            alt='Hero Image Right'
          />
        </ImagesContainer>
      </SectionContainer>
      <CardsContainer>
        <Card>
          <Image
            src={TimeIcon}
            alt='Time Icon'
          />
          <CardTitle>Recrutamento no tempo certo</CardTitle>
          <CardDescription>
            Auxiliamos na escolha e alocação de talentos de acordo com prazos definidos pelo cliente.
          </CardDescription>
        </Card>
        <Card>
          <Image
            src={PuzzleIcon}
            alt='Puzzle Icon'
          />
          <CardTitle>Monte um time eficiente</CardTitle>
          <CardDescription>
            Procure e encontre em nossa lista especialistas dedicados com as habilidades que seu time precisa.
          </CardDescription>
        </Card>
        <Card>
          <Image
            src={ChartLineIcon}
            alt='Chart Line Icon'
          />
          <CardTitle>Desempenho monitorado</CardTitle>
          <CardDescription>
            Temos níveis de gerenciamento para acompanhar o desempenho dos nossos especialistas alocados.
          </CardDescription>
        </Card>
        <Card>
          <Image
            src={UserIcon}
            alt='User Icon'
          />
          <CardTitle>Talentos com técnica e qualidade</CardTitle>
          <CardDescription>
            Nossos especialistas são avaliados e passam por crivo técnico e de qualidade para integrar nossa lista.
          </CardDescription>
        </Card>
      </CardsContainer>
    </Container>
  );
};
