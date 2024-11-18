import styled from 'styled-components'
import { Header1, Styles } from '@/styles';

export const CarouselContainer = styled.div`
  display: block;
  width: 100%;
  position: relative;
  margin: 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 769px) {
    display: none;
  }
`

export const CarouselWrapper = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
`

export const CarouselSlide = styled.div`
  display: flex;
  transition: transform 0.5s ease;
  width: 100%;
`

export const NavigationButton = styled.button<{ direction: 'left' | 'right' }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${({ direction }) => direction === 'left' ? 'left: 0;' : 'right: 0;'}
  background: rgba(255, 255, 255, 0.8);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 2;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &:hover {
    background: rgba(255, 255, 255, 1);
  }
`

export const DotsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1rem;
`

export const Dot = styled.button<{ active: boolean }>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: none;
  background-color: ${({ active }) => active ? '#000' : '#ccc'};
  cursor: pointer;
  padding: 0;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ active }) => active ? '#000' : '#999'};
  }
`

export const TitleContainer = styled.div`
  text-align: center;
  max-width: 28rem;
  padding-top: 10px;
  padding-bottom: 15px;

  span {
    color: ${({ theme }) => theme.colors.textGreen};
  }
`;

export const Title = styled(Header1)`
  @media (${Styles.devices.tabletL}) {
    font-size: 2rem;
  }
`;