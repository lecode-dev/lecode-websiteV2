'use client';
import Image from 'next/image';
import Link from 'next/link';
import intagramLogo from '../../images/instagram-icon.svg';
import linkedlnLogo from '../../images/linkedln-icon.svg';
import gitHubLogo from '../../images/github-icon.svg';
import lecodeLogo from '../../images/lecode-logo-gray.svg';
import { InternalLinks } from '../InternalLinks';
import { ExternalLinks, FooterContainer, LinksContainer, Typo } from './styles';

export const Footer = () => {
  return (
    <FooterContainer>
      <Image
        src={lecodeLogo}
        alt='lecode logo in gray'
      />
      <LinksContainer>
        <InternalLinks />
        <ExternalLinks>
          <a
            href='https://www.instagram.com/lecode_dev/'
            target='_blank'
            rel="noreferrer"
          >
            <Image
              src={intagramLogo}
              alt='black Instagram logo'
              width={25}
              height={25}
            />
          </a>
          <a
            href='https://br.linkedin.com/company/lecodedev'
            target='_blank'
            rel="noreferrer"
          >
            <Image
              src={linkedlnLogo}
              alt='black Linkedln logo'
              width={25}
              height={25}
            />
          </a>
          <a
            href='https://github.com/lecode-dev'
            target='_blank'
            rel="noreferrer"
          >
             <Image
            src={gitHubLogo}
            alt='black GitHub logo'
            width={25}
            height={25}
          />
          </a>
        </ExternalLinks>
      </LinksContainer>
      <Typo> © 2023 LeCode, Inc.Todos os direitos reservados. </Typo>
    </FooterContainer>
  );
};
