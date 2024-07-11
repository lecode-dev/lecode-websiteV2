import styled from 'styled-components';
import { Montserrat } from 'next/font/google';
import { Header1, Styles } from '@/styles';

const montserrat = Montserrat({ weight: ['700'], style: ['normal'], subsets: ['latin'], display: 'swap' });

export const ComponentContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 8rem;
  background-color: ${({ theme }) => theme.colors.gray};
`;

export const TitleContainer = styled.div`
  text-align: center;
  max-width: 28rem;

  span {
    color: ${({ theme }) => theme.colors.textGreen};
  }
`;

export const Title = styled(Header1)`
  font-family: ${montserrat.style.fontFamily};
  @media (${Styles.devices.tabletL}) {
    font-size: 2rem;
  }
`;

export const ClientsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  max-width: ${Styles.deviceSizes.laptopL};
  padding: 48px 101px 101px 48px;
  gap: 59px;

  @media (${Styles.devices.tablet}) {
    display: none;
  }
`;

export const ClientsCarouselContainer = styled.div`
  padding: 48px 101px 101px 48px;
  display: none;

  @media (${Styles.devices.tablet}) {
    display: block;
  }
`;

export const ClientCard = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: #D6D6D6;
`;
