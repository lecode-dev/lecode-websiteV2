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

import novoLogo from '../../../public/clients/novoLogo.svg';
import autonomyLogo from '../../../public/clients/autonomyLogo.svg';
import ethicsNetLogo from '../../../public/clients/ethicsNetLogo.svg';
import falconsLogo from '../../../public/clients/falconsLogo.svg';
import scouthubLogo from '../../../public/clients/scouthubLogo.svg';
import workStory from '../../../public/clients/workStory.svg';
import synergyLogo from '../../../public/clients/synergyLogo.svg';

export const Clients = () => {
  const clients: Record<string, JSX.Element> = {
    client1: <Image src={novoLogo} alt='client1' width={150} height={150} />,
    client2: <Image src={autonomyLogo} alt='client2' width={150} height={150} />,
    client3: <Image src={ethicsNetLogo} alt='client3' width={150} height={150} />,
    client4: <Image src={falconsLogo} alt='client4' width={150} height={150} />,
    client5: <Image src={scouthubLogo} alt='client5' width={150} height={150} />,
    client6: <Image src={workStory} alt='client6' width={150} height={150} />,
    client7: <Image src={synergyLogo} alt='client7' width={150} height={150} />,
  };

  return (
    <ComponentContainer id='clients'>
      <TitleContainer>
        <Title>
          <Trans i18nKey='clients.subtitle' />
        </Title>
      </TitleContainer>
      <ClientsContainer>
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
