'use client';
import Image from 'next/image';
import Link from 'next/link';
import lecodeLogo from '../../../public/lecode-logo.svg';
import { LecodeLogo, NavbarContainer, NavbarContentContainer} from './styles';
import { InternalLinks } from '../InternalLinks';
import { ContactButton } from '../ContactButton';

export const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarContentContainer>
       <InternalLinks />
        <LecodeLogo
          alt='LeCode logo: green triangle with white Le and black code'
          src={lecodeLogo}
        />
        <ContactButton>
          <Link
            href='#contact'
          >
            Entre em contato
          </Link>
        </ContactButton>
      </NavbarContentContainer>
    </NavbarContainer>
  );
};
