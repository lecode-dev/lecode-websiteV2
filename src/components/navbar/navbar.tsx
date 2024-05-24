'use client';
import { Changa, Poppins } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import lecodeLogo from '../../../public/lecode-logo.svg';
import { NavbarContainer, NavbarContentContainer, NavLinks, StyledLink } from './style';
import { ContactButton } from '@/styles/global';

const poppins = Poppins({ weight: ['600'], style: ['normal'], subsets: ['latin'], display: 'swap' });

const changa = Changa({ weight: ['500'], style: ['normal'], subsets: ['latin'], display: 'swap' });

export const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarContentContainer>
        <NavLinks className={changa.className}>
          <StyledLink href='#about'>Quem Somos</StyledLink>
          <StyledLink href='#technologies'>Nossas Habilidades</StyledLink>
          <StyledLink href='#cases'>Cases</StyledLink>
          <StyledLink href='#team'>Equipe</StyledLink>
          <StyledLink href='#clients'>Clientes</StyledLink>
        </NavLinks>
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
