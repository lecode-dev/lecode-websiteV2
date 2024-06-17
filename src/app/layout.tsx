import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/Providers/ThemeProvider/theme-provider';
import { ResetCSS, GlobalCSS } from '@/styles';
import { i18nConfig } from '@/i18n';

export const metadata: Metadata = {
  title: 'LeCode',
  description: 'LeCode interprise is especialized in web development, and also is an agency with React, JavaScript, NodeJs, Electra and NextJs developers',
};

export function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }));
}

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  return (
    <html lang={locale}>
      <body>
        <ThemeProvider>
          <ResetCSS />
          <GlobalCSS />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
