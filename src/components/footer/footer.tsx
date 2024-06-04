'use client';
import { ExternalLinks, FooterContainer, LinksContainer, Typo } from './styles';
import Image from 'next/image';
import intagramLogo from '../../imgs/instagram-icon.svg';
import linkedlnLogo from '../../imgs/linkedln-icon.svg';
import gitHubLogo from '../../imgs/github-icon.svg';
import lecodeLogo from '../../imgs/lecode-logo-gray.svg';
import { InternalLinks } from '../InternalLinks';
import Link from 'next/link';

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
          <Link
            href='https://www.instagram.com/lecode_dev/'
            passHref
            target='_blank'
          >
            <Image
              src={intagramLogo}
              alt='black Instagram logo'
              width={25}
              height={25}
            />
          </Link>
          <Link
            href='https://br.linkedin.com/company/lecodedev'
            passHref
            target='_blank'
          >
            <Image
              src={linkedlnLogo}
              alt='black Linkedln logo'
              width={25}
              height={25}
            />
          </Link>
          <Link
            href='https://github.com/lecode-dev'
            passHref
            target='_blank'
          >
             <Image
            src={gitHubLogo}
            alt='black GitHub logo'
            width={25}
            height={25}
          />
          </Link>
        </ExternalLinks>
      </LinksContainer>
      <Typo> © 2023 LeCode, Inc.Todos os direitos reservados. </Typo>
    </FooterContainer>
  );
};
