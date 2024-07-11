import styled from 'styled-components';
import { Changa } from 'next/font/google';
import { Styles } from '@/styles';

const changa = Changa({ subsets: ['latin'], weight: '300' });

export const FooterContainer = styled.footer`
  display: flex;
  width: 100%;
  height: 100px;
  padding-top: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.4vw;
  flex-shrink: 0;
  background: ${({ theme }) => theme.colors.mainBack};
  @media (${Styles.devices.mobileL}) {
  height: 220px;
    
    
  }
`;

export const LinksContainer = styled.nav`
  display: flex;
  width: 92rem;
  align-items: center;
  @media (${Styles.devices.laptopL}) {
    width: 85vw;
  }
  @media (${Styles.devices.tablet}) {
    margin-right: 4rem;
  }
`;

export const ExternalLinks = styled.div`
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  gap: 51px;

  a {
    &:hover {
      color: ${({ theme }) => theme.colors.mainGreen};

      img {
        filter: invert(50%) sepia(94%) saturate(343%) hue-rotate(84deg) brightness(100%) contrast(92%);
      }
    }

    img {
      filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%);
      transition: filter 0.3s ease;
    }
  }

  @media (${Styles.devices.laptopL}) {
    width: 20vw;
  }
  @media (${Styles.devices.mobileL}) {
    flex-direction: column;
    align-items: center;
    gap: 28px;
  }
`;

export const Typo = styled.p`
  font-family: ${changa.style.fontFamily};
  width: 100%;
  padding: 20px;
  color: ${({ theme }) => theme.colors.white};
`;
