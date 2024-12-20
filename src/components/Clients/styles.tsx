import styled from 'styled-components';
import { Header1, Styles } from '@/styles';


export const ComponentContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 8rem;
  padding-bottom: 8rem;
  background-color: ${({ theme }) => theme.colors.gray};
  @media (${Styles.devices.tablet}) {
    display: none;
    padding-top: 4rem;
  }
`;

export const TitleContainer = styled.div`
  text-align: center;
  max-width: 28rem;

  span {
    color: ${({ theme }) => theme.colors.textGreen};
  }
`;

export const Title = styled(Header1)`
  @media (${Styles.devices.tabletL}) {
    font-size: 2rem;
  }
`;

export const ClientsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  max-width: 1200px;
  padding: 48px 101px 25px 48px;
  gap: 59px;
  @media (${Styles.devices.tablet}) {
    max-height: 850px;
    padding: 40px 0px 40px;
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 35px;
  }
`;

export const ClientsCarouselContainer = styled.div`
  //padding: 48px 101px 101px 48px;
  display: none;
  @media (${Styles.devices.tablet}) {
    //display: block;
  }
`;

export const ClientCard = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: #D6D6D6;
  @media (${Styles.devices.tablet}) {
    width: 150px;
    height: 150px
  } 
`;
