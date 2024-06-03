import type { PropsWithChildren } from 'react';
import { initTranslations } from '@/i18n';
import { TranslationProvider } from '@/components/Providers';

const i18nNamespaces = ['landing-page'];

interface LayoutProps extends PropsWithChildren {
  params: {
    locale: string;
  };
}

export default async function Layout({ children, params: { locale } }: LayoutProps) {
  const { resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationProvider
      locale={locale}
      resources={resources}
      namespaces={i18nNamespaces}
    >
      {children}
    </TranslationProvider>
  );
}
