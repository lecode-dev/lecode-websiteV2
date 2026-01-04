import type { PropsWithChildren } from 'react';
import type { Metadata } from 'next';
import { initTranslations } from '@/i18n';
import { TranslationProvider } from '@/components/Providers';
import { StructuredData } from '@/components/StructuredData';

const i18nNamespaces = ['landing-page'];

interface LayoutProps extends PropsWithChildren {
  params: {
    locale: string;
  };
}

// Função para gerar metadata baseada no locale
export async function generateMetadata({
  params: { locale },
}: LayoutProps): Promise<Metadata> {
  const { resources } = await initTranslations(locale, i18nNamespaces);

  // Função helper para acessar traduções
  const t = (key: string) => {
    const keys = key.split('.');
    let value: any = resources[locale]['landing-page'];
    for (const k of keys) {
      value = value?.[k];
    }
    return value || key;
  };

  const baseUrl = 'https://lecode.dev';
  const currentUrl = `${baseUrl}/${locale}`;
  const ogImage = `${baseUrl}/og.png`;

  // Mapear locale para formato Open Graph
  let ogLocale = 'es_ES';
  if (locale === 'pt') {
    ogLocale = 'pt_BR';
  } else if (locale === 'en') {
    ogLocale = 'en_US';
  }

  return {
    title: t('seo.title'),
    description: t('seo.description'),
    alternates: {
      canonical: currentUrl,
      languages: {
        'pt-BR': `${baseUrl}/pt`,
        'en-US': `${baseUrl}/en`,
        'es-ES': `${baseUrl}/es`,
        'x-default': baseUrl,
      },
    },
    openGraph: {
      title: t('seo.ogTitle'),
      description: t('seo.ogDescription'),
      url: currentUrl,
      siteName: t('seo.siteName'),
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: t('seo.ogTitle'),
        },
      ],
      locale: ogLocale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: t('seo.ogTitle'),
      description: t('seo.ogDescription'),
      images: [ogImage],
    },
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
      <StructuredData locale={locale} />
      {children}
    </TranslationProvider>
  );
}
