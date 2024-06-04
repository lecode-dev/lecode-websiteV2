'use client';
import { Poppins } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { ContactButton } from '@/components/ContactButton';
import lecodeLogo from '../../../public/lecode-logo.svg';
import { InternalLinks } from '../InternalLinks';
import { Language } from '../Language';
import { NavbarContainer, NavbarContentContainer } from './styles';

const poppins = Poppins({ weight: ['600'], style: ['normal'], subsets: ['latin'], display: 'swap' });

export const Navbar = () => {
  const { t } = useTranslation();

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
            {t('contactUs.title')}
          </Link>
        </ContactButton>
        <Language />
      </NavbarContentContainer>
    </NavbarContainer>
  );
};
