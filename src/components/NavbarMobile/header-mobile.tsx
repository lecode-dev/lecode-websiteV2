'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { ContactButton } from '@/components/ContactButton';
import lecodeLogo from '../../../public/lecode-logo.svg';
import { InternalLinks } from '../InternalLinks';
import { Language } from '../Language';
import { NavbarContainer, NavbarContentContainer,ContactTraslate } from './styles';


export const HeaderMobile = () => {
  const { t } = useTranslation();
  return (
    <NavbarContainer>
      <NavbarContentContainer>
        <InternalLinks />
        <Image
          alt='LeCode logo: green triangle with white Le and black code'
          src={lecodeLogo}
        />
        <ContactTraslate>
        <ContactButton type='button'>
          <Link
            href='#contact'
          >
            {t('contactUs.button')}
          </Link>
        </ContactButton>
        <Language />
        </ContactTraslate>
      </NavbarContentContainer>
    </NavbarContainer>
  );
};
