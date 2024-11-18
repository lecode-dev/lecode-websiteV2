'use client'

import { useState, useRef } from 'react'
import Image from 'next/image';
import { Trans } from 'react-i18next';
import LecodeLogoBackground from '@/images/lecode-logo-background.svg';
import  SetaEsquerda  from '../../images/seta-esquerda.svg';
import  SetaDireita  from '../../images/seta-direita.svg';
import novoLogo from '../../../public/clients/novoLogo.svg'
import autonomyLogo from '../../../public/clients/autonomyLogo.svg'
import ethicsNetLogo from '../../../public/clients/ethicsNetLogo.svg'
import falconsLogo from '../../../public/clients/falconsLogo.svg'
import scouthubLogo from '../../../public/clients/scouthubLogo.svg'
import workStory from '../../../public/clients/workStory.svg'
import synergyLogo from '../../../public/clients/synergyLogo.svg'
import {LogoBackground} from '../../app/(components)/(testimony)/styles';
import { 
  CarouselContainer, 
  CarouselWrapper, 
  CarouselSlide, 
  NavigationButton, 
  DotsContainer, 
  Dot,
  TitleContainer,
  Title,
} from './styles'

const logos = [
  { src: novoLogo, alt: 'Novo Logo' },
  { src: autonomyLogo, alt: 'Autonomy Logo' },
  { src: ethicsNetLogo, alt: 'EthicsNet Logo' },
  { src: falconsLogo, alt: 'Falcons Logo' },
  { src: scouthubLogo, alt: 'Scouthub Logo' },
  { src: workStory, alt: 'Work Story Logo' },
  { src: synergyLogo, alt: 'Synergy Logo' },
]

const BackgroundLogo = [
  { $top: '100px', $right: '-50px' },
  { $top: '100px', $left: '-30px', $opacity: '10%' },
  { $bottom: '0px', $right: '100px' },
  { $bottom: '50px', $left: '90px', $opacity: '10%' },
]

export function NewCarousel () {
  const [currentIndex, setCurrentIndex] = useState(0)
  const slideRef = useRef<HTMLDivElement>(null)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + 2 >= logos.length ? 0 : prevIndex + 2
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex - 2 < 0 ? logos.length - 2 : prevIndex - 2
    )
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index * 2)
  }

  const totalDots = Math.ceil(logos.length / 2)

  return (
    <CarouselContainer>
      {BackgroundLogo.map((props, index) => (
          <LogoBackground
            key={`logo-background-${index}`}
            src={LecodeLogoBackground}
            alt={`lecode-logo-background-${index}`}
            {...props}
          />
        ))}
      <TitleContainer>
        <Title>
          <Trans i18nKey='clients.subtitle' />
        </Title>
      </TitleContainer>
      <CarouselWrapper>
        <NavigationButton direction="left" onClick={prevSlide}>
        <Image alt='setaEsquerda'src={SetaEsquerda}/>
        </NavigationButton>
        
        <CarouselSlide ref={slideRef} style={{
          transform: `translateX(-${currentIndex * 50}%)`
        }}>
          {logos.map((logo, index) => (
            <Image
              key={index}
              src={logo.src}
              alt={logo.alt}
              width={200}
              height={100}
              style={{
                width: '50%',
                flexShrink: 0,
                padding: '0 1rem',
                objectFit: 'contain'
              }}
            />
          ))}
        </CarouselSlide>

        <NavigationButton direction="right" onClick={nextSlide}>
        <Image 
        alt='setaDireita'
        src={SetaDireita}
         />
        </NavigationButton>
      </CarouselWrapper>

      <DotsContainer>
        {Array.from({ length: totalDots }).map((_, index) => (
          <Dot
            key={index}
            active={Math.floor(currentIndex / 2) === index}
            onClick={() => { goToSlide(index); }}
          />
        ))}
      </DotsContainer>
    </CarouselContainer>
  )
};