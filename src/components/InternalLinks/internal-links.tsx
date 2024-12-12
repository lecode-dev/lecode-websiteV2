'use client'

import { useTranslation } from 'react-i18next';
import { NavLinks, StyledLink } from './styles';

export const InternalLinks = () => {
   const { t } = useTranslation();

  return (
    <NavLinks>
      <StyledLink href='#about'>{t('aboutUs.title')}</StyledLink>
      <StyledLink href='#technologies'>{t('ourSkills.title')}</StyledLink>
      <StyledLink href='#team'>{t('team.title')}</StyledLink>
      <StyledLink href='#clients'>{t('clients.title')}</StyledLink>
    </NavLinks>
  );
};
