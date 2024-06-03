'use client';

import { useCallback } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { i18nConfig } from '@/i18n';

export const Language = () => {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();

  const handleChange = useCallback(
    (newLocale: string) => () => {
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
    <div>
      <button
        type='button'
        onClick={handleChange(i18n.language === 'en' ? 'pt' : 'en')}
      >
        {' '}
        Change language{' '}
      </button>
    </div>
  );
};
