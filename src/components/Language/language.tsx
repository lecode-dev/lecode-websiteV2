'use client';

import { useCallback } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { i18nConfig } from '@/i18n';
import { Select } from './styles';

export const Language = () => {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();

  const languages = i18nConfig.locales;

  const handleChange = useCallback(
    (newLocale: string) => () => {
      console.log('newLocale', newLocale);
      const days = 30;
      const date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      const expires = `; expires=${date.toUTCString()}`;
      document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

      if (currentLocale === i18nConfig.defaultLocale) {
        router.push(`/${newLocale}${currentPathname}`);
      } else {
        router.push(currentPathname.replace(`/${currentLocale}`, `/${newLocale}`));
      }

      router.refresh();
    },
    [currentLocale, currentPathname, router],
  );

  return (
    <Select value={currentLocale} onChange={(e) => {handleChange(e.target.value)()}}>
      {languages.map((lang) => (
        <option key={lang} value={lang}>
          {lang}
        </option>
      ))}
    </Select>
  );
};
