import { Montserrat, Poppins } from 'next/font/google';
import styled from 'styled-components';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { type HTMLAttributes } from 'react';
import { Styles } from '@/styles';

interface SpanWithStrokeProps extends HTMLAttributes<HTMLSpanElement> {
  language: string;
}

const montserrat = Montserrat({ weight: ['700'], style: ['normal'], subsets: ['latin'], display: 'swap' });
const poppins = Poppins({ weight: ['400'], style: ['normal'], subsets: ['latin'], display: 'swap' });

export const Container = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  width: 100%;
  padding-top: 8rem;

  @media (${Styles.devices.tablet}) {
    padding-top: 6rem;
  }
`;

export const AnimatedLogoContainer = styled(motion.div)`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  top: 0;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const AnimatedLogo = styled(motion(Image))`
  position: absolute;
`;

export const SectionContainer = styled(motion.section)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const TitleContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Title = styled(motion.h1)`
  font-size: 3rem; // 48px
  font-weight: 700;
  line-height: 3.75rem; // 60px
  font-family: ${montserrat.style.fontFamily};
  color: ${({ theme }) => theme.colors.black};
  text-align: center;
  width: 44rem; // 704px
  z-index: 2;

  span {
    color: ${({ theme }) => theme.colors.mainGreen};
  }

  @media (${Styles.devices.laptop}) {
    font-size: 2.25rem; // 36px
    line-height: 2.8125rem; // 45px
    width: 36rem; // 576px
  }

  @media (${Styles.devices.tablet}) {
    font-size: 1.75rem; // 28px
    line-height: 2.5rem; // 40px
    width: 28rem; // 448px
  }

  @media (${Styles.devices.mobileL}) {
    font-size: 1.5rem; // 24px
    line-height: 1.875rem; // 30px
    width: 24rem; // 384px
  }
`;

export const SpanWithStroke = styled(motion.span) <SpanWithStrokeProps>`
  position: relative;

  img {
    position: absolute;
    top: 2.625rem; // 42px
    right: ${({ language }) => (language === 'en' ? '0' : '-1rem')}; 

    @media (${Styles.devices.laptop}) {
      top: 1.75rem; // 28px
      right: ${({ language }) => (language === 'en' ? '0' : '-1rem')}; 
      width: 15rem; // 240px
    }

    @media (${Styles.devices.tablet}) {
      top: 1.1875rem; // 19px
      right: ${({ language }) => (language === 'en' ? '0' : '-0.5rem')};
      width: 11.125rem; // 178px
    }

    @media (${Styles.devices.mobileL}) {
      top: 0.8125rem; // 13px
      right: ${({ language }) => (language === 'en' ? '0' : '0.25rem')};
      width: 8.4375rem; // 135px
    }
  }
`;

export const ImagesContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;
`;

export const HeroImage = styled(Image)`
  position: relative;
  width: 60%;
  height: 60%;
  object-fit: contain;
  max-width: 43.9375rem;
  max-height: 24.40794rem;
  left: -0.25rem; // -4px
  top: 1rem;
  z-index: 1;

  @media (${Styles.devices.laptop}) {
    width: 80%;
    height: 80%;
    top: 0.8rem;
    left: -0.1875rem; // -3px
  }

  @media (${Styles.devices.tablet}) {
    position: static;
  }
`;

export const RectangleWithGreenStroke = styled(Image)`
  position: absolute;
  height: 100%;
  top: 45%;
`;

export const HeroGroupImageLeft = styled(Image)`
  position: absolute;
  width: 100%;
  height: 50%;
  top: 18%;
  right: 35%;
  z-index: 0;

  @media (${Styles.devices.laptopL}) {
    right: 40%;
  }

  @media (${Styles.devices.laptop}) {
    right: 44%;
  }

  @media (${Styles.devices.tablet}) {
    display: none;
  }
`;

export const HeroGroupImageRight = styled(Image)`
  position: absolute;
  width: 100%;
  height: 37%;
  top: 20%;
  right: -34%;
  z-index: 0;

  @media (${Styles.devices.laptopL}) {
    right: -37%;
  }

  @media (${Styles.devices.laptop}) {
    right: -41%;
  }

  @media (${Styles.devices.tablet}) {
    display: none;
  }
`;

export const HeroGroupSecundaryImageLeft = styled(Image)`
  display: none;

  @media (${Styles.devices.tablet}) {
    display: block;
    position: absolute;
    width: 100%;
    top: 22%;
    right: 41%;
    height: 55%;
  }
`;
export const HeroGroupSecundaryImageRight = styled(Image)`
  display: none;

  @media (${Styles.devices.tablet}) {
    display: block;
    position: absolute;
    width: 100%;
    top: 32%;
    right: -43%;
    height: 40%;
  }
`;

export const CardsContainer = styled(motion.div)`
  display: flex;
  position: relative;
  width: 100%;
  padding: 3rem 1.5625rem 0 1.5625rem; // 48px 25px 0 25px
  justify-content: center;
  align-items: flex-start;
  gap: 4.5rem; // 72px
  top: -1rem; // -42px
  background-color: ${({ theme }) => theme.colors.white};

  @media (${Styles.devices.laptop}) {
    gap: 3.125rem; // 50px
    padding: 2.5rem 1.5625rem 0 1.5625rem; // 40px 25px 0 25px
    top: -0.8rem; // -34px
  }

  @media (${Styles.devices.tablet}) {
    flex-direction: column;
    align-items: center;
    top: 0;
    padding-bottom: 40px;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.875rem; // 14px
  width: 15.625rem; // 250px
`;

export const CardTitle = styled.h1`
  font-size: 1.5rem; // 24px
  font-weight: 700;
  line-height: 1.875rem; // 30px
  font-family: ${montserrat.style.fontFamily};
  color: ${({ theme }) => theme.colors.black};
`;

export const CardDescription = styled.p`
  font-size: 1rem; // 16px
  font-weight: 400;
  line-height: 1.25rem; // 20px
  font-family: ${poppins.style.fontFamily};
  color: ${({ theme }) => theme.colors.secundaryGray};
`;
