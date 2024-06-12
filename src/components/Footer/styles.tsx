import styled from 'styled-components';
import { Changa } from 'next/font/google';
import { Styles } from '@/styles';

const changa = Changa({ subsets: ['latin'], weight: '300' });

export const FooterContainer = styled.footer`
  display: flex;
  width: 100%;
  height: 300px;
  padding-top: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.4vw;
  flex-shrink: 0;
  background: ${({ theme }) => theme.colors.mainGreen};

  @media (${Styles.devices.tablet}) {
    height: 496px;
    gap: 28px;
    justify-content: space-between;
  }
`;

export const LinksContainer = styled.nav`
  display: flex;
  width: 82.01rem;
  justify-content: space-between;
  align-items: center;

  @media (${Styles.devices.laptopL}) {
    width: 80vw;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
  }

  @media (${Styles.devices.tablet}) {
    justify-content: center;
  }
`;

export const ExternalLinks = styled.div`
  color: ${({ theme }) => theme.colors.black};
  display: flex;
  gap: 51px;

  @media (${Styles.devices.laptopL}) {
    width: 20vw;
  }

  @media (${Styles.devices.tablet}) {
    flex-direction: column;
    align-items: center;
    gap: 28px;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.hover.mainGreen};
  }
`;

export const Typo = styled.p`
  font-family: ${changa.style.fontFamily};
  border-top: 1px solid ${({ theme }) => theme.colors.black};
  width: 100%;
  padding: 20px;
  text-align: center;
`;
