import styled from 'styled-components';
import Image from 'next/image';
import { Styles } from '@/styles';

export const SectionContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  padding: 60px 25px 60px 25px;
  background-color: ${({ theme }) => theme.colors.gray};

  @media (${Styles.devices.tablet}) {
    display: none;
  }
`;

export const TitleContainer = styled.div`
  position: relative;
  margin-bottom: 100px;
  display: flex;
  justify-content: center;
`;

export const StrokeImage = styled(Image)`
  position: absolute;
  top: 48px;
`;

export const TestimoniesContainer = styled.div`
  position: relative;
  width: ${Styles.deviceSizes.desktop};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8rem;

  @media (${Styles.devices.desktop}) {
    width: 100vw;
  }
`;

export const Mask = styled(Image)`
  position: absolute;
  bottom: 0px;
  right: 0px;
  opacity: 20%;
`;

export const LogoBackground = styled(Image)<{
  $top?: string;
  $right?: string;
  $bottom?: string;
  $left?: string;
  $opacity?: string;
}>`
  position: absolute;
  opacity: ${({ $opacity }) => $opacity ?? '20%'};
  ${({ $top }) => $top && `top: ${$top};`}
  ${({ $right }) => $right && `right: ${$right};`}
  ${({ $bottom }) => $bottom && `bottom: ${$bottom};`}
  ${({ $left }) => $left && `left: ${$left};`}
  
  @media (${Styles.devices.laptopL}) {
    width: 250px;
    height: 300px;
  }

  @media (${Styles.devices.laptop}) {
    width: 200px;
    height: 260px;
  }
`;
