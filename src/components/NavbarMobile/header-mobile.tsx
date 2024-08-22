'use client';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { ContactButton } from '@/components/ContactButton';
import lecodeLogo from '../../../public/lecode-logo.svg';
import { InternalLinks } from '../InternalLinks';
import { Language } from '../Language';
import { NavbarContainer, NavbarContentContainer, ContactTraslate, LecodeLogo } from './styles'; 

export const HeaderMobile = () => {
  const { t } = useTranslation();
  return (
    <NavbarContainer>
      <NavbarContentContainer>
        <InternalLinks />
        <LecodeLogo
          alt='LeCode logo: green triangle with white Le and black code'
          src={lecodeLogo}
        />
        <ContactTraslate>
          <Link href='#contact'>
            <ContactButton type='button'>{t('contactUs.button')}</ContactButton>
          </Link>
          <Language />
        </ContactTraslate>
      </NavbarContentContainer>
    </NavbarContainer>
  );
};
