'use client';
import {Poppins } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { ContactButton } from '@/components/ContactButton';
import lecodeLogo from '../../../public/lecode-logo.svg';
import { NavbarContainer, NavbarContentContainer} from './styles';
import { InternalLinks } from '../InternalLinks';

const poppins = Poppins({ weight: ['600'], style: ['normal'], subsets: ['latin'], display: 'swap' });

export const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarContentContainer>
       <InternalLinks />
        <Image
          alt='LeCode logo: green triangle with white Le and black code'
          src={lecodeLogo}
        />
        <ContactButton>
          <Link
            href='#contact'
            className={poppins.className}
          >
            Entre em contato
          </Link>
        </ContactButton>
      </NavbarContentContainer>
    </NavbarContainer>
  );
};
