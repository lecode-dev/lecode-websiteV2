'use client';
import { Changa, Poppins } from 'next/font/google';
import Image from 'next/image';
import lecodeLogo from '../../../public/lecode-logo.svg'
import Link from 'next/link';
import { NavbarContainer,NavbarContentContainer, ContactButton, NavLinks, } from './style';

const poppins = Poppins({  weight: ['600'],
style: ['normal'],
subsets: ['latin'],
display: 'swap', })

const changa = Changa({  weight: ['500'],
style: ['normal'],
subsets: ['latin'],
display: 'swap', })

export const Navbar = () => {
  return (
    <NavbarContainer>
    <NavbarContentContainer>
        <NavLinks className=''>
        <Link href='#about' className={changa.className}>Quem Somos</Link>
        <Link href='#technologies' className={changa.className}>Nossas Habilidades</Link>
        <Link href='#cases' className={changa.className}>Cases</Link>
        <Link href='#team' className={changa.className}>Equipe</Link>
        <Link href='#clients' className={changa.className}>Clientes</Link>
        </NavLinks>
        <Image alt='LeCode logo: green triangle with white Le and black code' src={lecodeLogo}/>
      <ContactButton >
        <Link href='#contact' className={poppins.className}>Entre em contato</Link>
      </ContactButton>
    </NavbarContentContainer>
    </NavbarContainer>
  );
};
