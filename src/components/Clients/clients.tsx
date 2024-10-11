'use client'
import { Trans } from 'react-i18next';
import { Carousel } from '../Carousel';
import {
  ComponentContainer,
  ClientsContainer,
  TitleContainer,
  ClientCard,
  ClientsCarouselContainer,
  Title,
} from './styles';
import Image from 'next/image';
import LecodeLogoBackground from '@/images/lecode-logo-background.svg';
import {LogoBackground} from '../../app/(components)/(testimony)/styles';

import novoLogo from '../../../public/clients/novoLogo.svg';
import autonomyLogo from '../../../public/clients/autonomyLogo.svg';
import ethicsNetLogo from '../../../public/clients/ethicsNetLogo.svg';
import falconsLogo from '../../../public/clients/falconsLogo.svg';
import scouthubLogo from '../../../public/clients/scouthubLogo.svg';
import workStory from '../../../public/clients/workStory.svg';
import synergyLogo from '../../../public/clients/synergyLogo.svg';

export const Clients = () => {
  const clients: Record<string, JSX.Element> = {
    client1: <Image src={novoLogo} alt='client1' width={200} height={200} />,
    client2: <Image src={autonomyLogo} alt='client2' width={200} height={200} />,
    client3: <Image src={ethicsNetLogo} alt='client3' width={200} height={200} />,
    client4: <Image src={falconsLogo} alt='client4' width={200} height={200} />,
    client5: <Image src={scouthubLogo} alt='client5' width={200} height={200} />,
    client6: <Image src={workStory} alt='client6' width={200} height={200} />,
    client7: <Image src={synergyLogo} alt='client7' width={200} height={200} />,
  };


  const BackgroundLogo = [
    { $top: '100px', $right: '-50px' },
    { $top: '100px', $left: '-30px', $opacity: '10%' },
    { $bottom: '0px', $right: '100px' },
    { $bottom: '50px', $left: '90px', $opacity: '10%' },
  ]

  return (
    <ComponentContainer id='clients'>
      <TitleContainer>
        <Title>
          <Trans i18nKey='clients.subtitle' />
        </Title>
      </TitleContainer>
      <ClientsContainer>
      {BackgroundLogo.map((props, index) => (
          <LogoBackground
            key={`logo-background-${index}`}
            src={LecodeLogoBackground}
            alt={`lecode-logo-background-${index}`}
            {...props}
          />
        ))}
        {Object.values(clients).map((client, index) => (
          <ClientCard key={index}>{client}</ClientCard>
        ))}
      </ClientsContainer>
      <ClientsCarouselContainer>
        <Carousel
          slides={Object.values(clients).map((client, index) => (
            <ClientCard key={index}>{client}</ClientCard>
          ))}
        />
      </ClientsCarouselContainer>
    </ComponentContainer>
  );
};
