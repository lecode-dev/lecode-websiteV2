'use client'

import { useState, useRef } from 'react'
import Image from 'next/image';
import { Trans } from 'react-i18next';
import SetaEsquerda from '../../images/seta-esquerda.svg';
import SetaDireita from '../../images/seta-direita.svg';
import novoLogo from '../../../public/clients/novoLogo.svg'
import autonomyLogo from '../../../public/clients/autonomyLogo.svg'
import ethicsNetLogo2 from '../../../public/clients/ethicsNetLogo2.svg'
import falconsLogo from '../../../public/clients/falconsLogo.svg'
import scouthubLogo from '../../../public/clients/scouthubLogo.svg'
import workStory from '../../../public/clients/workStory.svg'
import synergyLogo from '../../../public/clients/synergyLogo.svg'
import bentCareLogo from '../../../public/clients/bentCareLogo.svg'
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
  { src: workStory, alt: 'Work Story Logo' },
  { src: falconsLogo, alt: 'Falcons Logo' },
  { src: autonomyLogo, alt: 'Autonomy Logo' },
  { src: synergyLogo, alt: 'Synergy Logo' },
  { src: scouthubLogo, alt: 'Scouthub Logo' },
  { src: novoLogo, alt: 'Novo Logo' },
  { src: bentCareLogo, alt: 'bentCareLogo' },
  { src: ethicsNetLogo2, alt: 'EthicsNet Logo' },
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
      <TitleContainer>
        <Title>
          <Trans i18nKey='clients.subtitle' />
        </Title>
      </TitleContainer>
      <CarouselWrapper>
        <NavigationButton direction="left" onClick={prevSlide}>
          <Image alt='setaEsquerda' src={SetaEsquerda} />
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
                padding: '0 0.5rem',
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