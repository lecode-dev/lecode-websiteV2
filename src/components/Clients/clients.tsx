'use client'
import { Trans } from 'react-i18next';
import styled from 'styled-components';
import {Styles} from '@/styles';
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

const ResponsiveImage = styled(Image) `
width: 200px;
height: 200px;

@media (${Styles.devices.tablet}) {
    width: 150px;
    height: 150px
  } 
`;

export const Clients = () => {
  const clients: Record<string, JSX.Element> = {
    client1: <ResponsiveImage src={novoLogo} alt="client1" />,
    client2: <ResponsiveImage src={autonomyLogo} alt="client2" />,
    client3: <ResponsiveImage src={ethicsNetLogo} alt="client3" />,
    client4: <ResponsiveImage src={falconsLogo} alt="client4" />,
    client5: <ResponsiveImage src={scouthubLogo} alt="client5" />,
    client6: <ResponsiveImage src={workStory} alt="client6" />,
    client7: <ResponsiveImage src={synergyLogo} alt="client7" />,
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
