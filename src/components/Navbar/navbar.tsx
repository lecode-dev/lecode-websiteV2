'use client';
import { Changa, Poppins } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { ContactButton } from '@/components/ContactButton';
import lecodeLogo from '../../../public/lecode-logo.svg';
import { Language } from '../Language/language';
import { NavbarContainer, NavbarContentContainer, NavLinks, StyledLink } from './styles';

const poppins = Poppins({ weight: ['600'], style: ['normal'], subsets: ['latin'], display: 'swap' });
const changa = Changa({ weight: ['500'], style: ['normal'], subsets: ['latin'], display: 'swap' });

export const Navbar = () => {

  const { t } = useTranslation();

  return (
    <NavbarContainer>
      <NavbarContentContainer>
        <NavLinks className={changa.className}>
          <StyledLink href='#about'>{t('aboutUs.title')}</StyledLink>
          <StyledLink href='#technologies'>{t('ourSkills.title')}</StyledLink>
          <StyledLink href='#cases'>{t('cases.title')}</StyledLink>
          <StyledLink href='#team'>{t('team.title')}</StyledLink>
          <StyledLink href='#clients'>{t('testimonials.title')}</StyledLink>
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
        <Language />
      </NavbarContentContainer>
    </NavbarContainer>
  );
};
