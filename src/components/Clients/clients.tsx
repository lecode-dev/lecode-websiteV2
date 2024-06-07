'use client';

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

export const Clients = () => {
  const clients = [
    'client1',
    'client2',
    'client3',
    'client4',
    'client5',
    'client6',
    'client7',
    'client8',
    'client9',
    'client10',
    'client11',
  ];

  return (
    <ComponentContainer id='clients'>
      <TitleContainer>
        <Title>
          <Trans i18nKey='clients.subtitle' />
        </Title>
      </TitleContainer>
      <ClientsContainer>
        {clients.map((client, index) => (
          <ClientCard key={index}>{client}</ClientCard>
        ))}
      </ClientsContainer>
      <ClientsCarouselContainer>
        <Carousel
          slides={clients.map((client, index) => (
            <ClientCard key={index}>{client}</ClientCard>
          ))}
        />
      </ClientsCarouselContainer>
    </ComponentContainer>
  );
};
