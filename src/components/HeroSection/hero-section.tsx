'use client';

import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import { Trans, useTranslation } from 'react-i18next';
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
import Logo from '../../../public/lecode-logo.svg';
import {
  AnimatedLogo,
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
  LogoContainer,
  RectangleWithGreenStroke,
  SectionContainer,
  SpanWithStroke,
  Title,
  TitleContainer,
} from './styles';

const AnimatedImage = motion(Image);
const AnimatedGroupImageLeft = motion(HeroGroupImageLeft);
const AnimatedGroupSecundaryImageLeft = motion(HeroGroupSecundaryImageLeft);
const AnimatedGroupImageRight = motion(HeroGroupImageRight);
const AnimatedGroupSecundaryImageRight = motion(HeroGroupSecundaryImageRight);

const logoContainerVariants = {
  initial: { opacity: 1 },
  animate: { opacity: 0, display: 'none', transition: { duration: 0.5 } },
};

const logoVariants = {
  initial: {
    opacity: 0,
    y: 0,
  },
  fadeIn: {
    opacity: 1,
    transition: { duration: 1, ease: 'easeInOut' },
  },
  animate: {
    opacity: 1,
    width: '9.28125rem', // 148.5px
    height: '5.22069rem', // 83.5px
    y: '-41.5vh',
    transition: { duration: 0.5 },
  },
};

const titleContainerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } },
};

const strokeVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } },
};

const titleVariants = {
  hidden: { y: 100, opacity: 1 },
  visible: { y: 0, opacity: 1, transition: { duration: 1 } },
};

const imagesContainerVariants = {
  hidden: { y: 200, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 1 } },
};

const cardsContainerVariants = {
  hidden: { y: 200, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 1 } },
};

const groupImageLeftVariants = {
  hidden: { x: 200, y: 100, opacity: 0 },
  visible: { x: 0, y: 0, opacity: 1, transition: { duration: 0.5 } },
};

const groupSecundaryImageLeftVariants = {
  hidden: { x: 200, y: 100, opacity: 0 },
  visible: { x: 0, y: 0, opacity: 1, transition: { duration: 0.5 } },
};

const groupImageRightVariants = {
  hidden: { x: -200, y: 100, opacity: 0 },
  visible: { x: 0, y: 0, opacity: 1, transition: { duration: 0.5 } },
};

const groupSecundaryImageRightVariants = {
  hidden: { x: -200, y: 100, opacity: 0 },
  visible: { x: 0, y: 0, opacity: 1, transition: { duration: 0.5 } },
};

export const HeroSection = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const logoContainerControls = useAnimation();
  const logoControls = useAnimation();
  const titleContainerControls = useAnimation();
  const strokeControls = useAnimation();
  const titleControls = useAnimation();
  const imagesContainerControls = useAnimation();
  const cardsContainerControls = useAnimation();
  const groupImageLeftControls = useAnimation();
  const groupSecundaryImageLeftControls = useAnimation();
  const groupImageRightControls = useAnimation();
  const groupSecundaryImageRightControls = useAnimation();

  useEffect(() => {
    async function sequence() {
      await logoControls.start('fadeIn'); // Fase de fadeIn do logo
      await logoControls.start('animate'); // Animação do logo
      await logoContainerControls.start('animate'); // Animação do container do logo
      await titleContainerControls.start('visible'); // Animação do container
      await strokeControls.start('visible'); // Animação do stroke
      await Promise.all([
        titleControls.start('visible'), // Animação do título
        imagesContainerControls.start('visible'), // Animação do container de imagens
        cardsContainerControls.start('visible'), // Animação do container de cards
      ]);
      await Promise.all([
        groupImageLeftControls.start('visible'), // Animação da imagem do grupo à esquerda
        groupSecundaryImageLeftControls.start('visible'), // Animação da imagem do grupo secundário à esquerda
        groupImageRightControls.start('visible'), // Animação da imagem do grupo à direita
        groupSecundaryImageRightControls.start('visible'), // Animação da imagem do grupo secundário à direita
      ]);
    }

    sequence();
  }, [
    logoContainerControls,
    logoControls,
    titleContainerControls,
    strokeControls,
    titleControls,
    imagesContainerControls,
    cardsContainerControls,
    groupImageLeftControls,
    groupSecundaryImageLeftControls,
    groupImageRightControls,
    groupSecundaryImageRightControls,
  ]);

  return (
    <Container id='aboutUs'>
      <LogoContainer
        initial='initial'
        animate={logoContainerControls}
        variants={logoContainerVariants}
      >
        <AnimatedLogo
          src={Logo}
          alt='Hero Image'
          initial='initial'
          animate={logoControls}
          variants={logoVariants}
        />
      </LogoContainer>
      <SectionContainer>
        <TitleContainer
          as={motion.div}
          initial='hidden'
          animate={titleContainerControls}
          variants={titleContainerVariants}
        >
          <Title
            as={motion.h1}
            initial='hidden'
            animate={titleControls}
            variants={titleVariants}
          >
            <Trans
              i18nKey='aboutUs.description'
              components={{
                span: <span />,
                strokeSpan: <SpanWithStroke language={currentLanguage} />,
                animatedImage: (
                  <AnimatedImage
                    src={Stroke}
                    alt='Stroke'
                    initial='hidden'
                    animate={strokeControls}
                    variants={strokeVariants}
                  />
                ),
              }}
            />
          </Title>
        </TitleContainer>
        <ImagesContainer
          as={motion.div}
          initial='hidden'
          animate={imagesContainerControls}
          variants={imagesContainerVariants}
        >
          <AnimatedGroupImageLeft
            src={HeroGroupImgLeft}
            alt='Hero Image Left'
            initial='hidden'
            animate={groupImageLeftControls}
            variants={groupImageLeftVariants}
          />
          <AnimatedGroupSecundaryImageLeft
            src={HeroGroupSecundaryImgLeft}
            alt='Hero Image Left'
            initial='hidden'
            animate={groupSecundaryImageLeftControls}
            variants={groupSecundaryImageLeftVariants}
          />
          <HeroImage
            src={HeroImg}
            alt='Hero Image'
          />
          <RectangleWithGreenStroke
            src={RetangleWithGreenShadow}
            alt='Rectangle With Green Stroke'
          />
          <AnimatedGroupSecundaryImageRight
            src={HeroGroupSecundaryImgRight}
            alt='Hero Image Right'
            initial='hidden'
            animate={groupSecundaryImageRightControls}
            variants={groupSecundaryImageRightVariants}
          />
          <AnimatedGroupImageRight
            src={HeroGroupImgRight}
            alt='Hero Image Right'
            initial='hidden'
            animate={groupImageRightControls}
            variants={groupImageRightVariants}
          />
        </ImagesContainer>
      </SectionContainer>
      <CardsContainer
        as={motion.div}
        initial='hidden'
        animate={cardsContainerControls}
        variants={cardsContainerVariants}
      >
        <Card>
          <Image
            src={TimeIcon}
            alt='Time Icon'
          />
          <CardTitle>{t('aboutUs.ourQualities.0.title')}</CardTitle>
          <CardDescription>{t('aboutUs.ourQualities.0.description')}</CardDescription>
        </Card>
        <Card>
          <Image
            src={PuzzleIcon}
            alt='Puzzle Icon'
          />
          <CardTitle>{t('aboutUs.ourQualities.1.title')}</CardTitle>
          <CardDescription>{t('aboutUs.ourQualities.1.description')}</CardDescription>
        </Card>
        <Card>
          <Image
            src={ChartLineIcon}
            alt='Chart Line Icon'
          />
          <CardTitle>{t('aboutUs.ourQualities.2.title')}</CardTitle>
          <CardDescription>{t('aboutUs.ourQualities.2.description')}</CardDescription>
        </Card>
        <Card>
          <Image
            src={UserIcon}
            alt='User Icon'
          />
          <CardTitle>{t('aboutUs.ourQualities.3.title')}</CardTitle>
          <CardDescription>{t('aboutUs.ourQualities.3.description')}</CardDescription>
        </Card>
      </CardsContainer>
    </Container>
  );
};
