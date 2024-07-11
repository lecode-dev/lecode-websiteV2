import styled from 'styled-components';
import Image from 'next/image';
import { Poppins } from 'next/font/google';
import { Paragraph2, Styles, createStyledParagraph } from '@/styles';

const poppins = Poppins({ weight: ['400'], style: ['normal'], subsets: ['latin'], display: 'swap' });

export const ComponentContainer = styled.div<{ $oddEven: boolean }>`
  position: relative;
  display: flex;
  flex-direction: row;
  font-family: ${poppins.style.fontFamily};
  left: ${({ $oddEven }) => ($oddEven ? '-10%' : '10%')};

  @media (${Styles.devices.laptop}) {
    left: ${({ $oddEven }) => ($oddEven ? '-5%' : '10%')};
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 18px;
  z-index: 1;
`;

export const ClientContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const FeedbackContainer = styled.div`
  width: 500px;
  text-align: justify;
  flex-wrap: wrap;

  @media (${Styles.devices.laptopL}) {
    width: 350px;
  }
`;

export const ClientData = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const ClientImage = styled(Image)`
  width: 192px;
  height: 176px;

  @media (${Styles.devices.laptop}) {
    width: 144px;
    height: 132px;
  }
`;

export const Logo = styled(Image)`
  position: absolute;
  top: -100px;
  left: -75px;
  display: flex;
  width: 144px;
  height: 176px;
  justify-content: center;

  @media (${Styles.devices.laptop}) {
    top: -80px;
    left: -60px;
    width: 108px;
    height: 132px;
  }
`;

export const Paragraph = styled(Paragraph2)`
  @media (${Styles.devices.laptopL}) {
    font-size: 14px;
  }
`;

export const CompanyName = styled(
  createStyledParagraph('p', {
    fontFamily: poppins.style.fontFamily,
    fontWeight: Styles.fonts.bold,
    fontSize: '20px',
    lineHeight: '25px',
  }),
)`
  color: ${({ theme }) => theme.colors.mainGreen};

  @media (${Styles.devices.laptopL}) {
    font-size: 16px;
  }
`;

export const ClientName = styled(
  createStyledParagraph('p', {
    fontFamily: poppins.style.fontFamily,
    fontWeight: Styles.fonts.semiBold,
    fontSize: '20px',
    lineHeight: '25px',
  }),
)`
  color: ${({ theme }) => theme.colors.secondaryGray};
  @media (${Styles.devices.laptopL}) {
    font-size: 16px;
  }
`;

export const ClientRole = styled(
  createStyledParagraph('p', {
    fontFamily: poppins.style.fontFamily,
    fontWeight: Styles.fonts.normal,
    fontSize: '20px',
    lineHeight: '25px',
  }),
)`
  color: ${({ theme }) => theme.colors.secondaryGray};
  @media (${Styles.devices.laptopL}) {
    font-size: 16px;
  }
`;
