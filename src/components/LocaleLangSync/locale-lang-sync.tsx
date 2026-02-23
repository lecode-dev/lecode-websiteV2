'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { i18nConfig } from '@/i18n';

/**
 * Sincroniza document.documentElement.lang com o locale da URL.
 * O layout raiz não recebe params do segmento [locale], então o html lang
 * é ajustado no cliente para acessibilidade e SEO corretos em /en e /es.
 */
export function LocaleLangSync() {
  const pathname = usePathname();

  useEffect(() => {
    const segment = pathname.split('/').find(Boolean);
    const locale =
      segment && i18nConfig.locales.includes(segment) ? segment : i18nConfig.defaultLocale;
    document.documentElement.lang = locale;
  }, [pathname]);

  return null;
}
