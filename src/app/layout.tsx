import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/Providers/ThemeProvider/theme-provider';
import { ResetCSS, GlobalCSS } from '@/styles';
import { i18nConfig } from '@/i18n';
import { Analytics } from '@/components/Analytics';

export const metadata: Metadata = {
  metadataBase: new URL('https://lecode.dev'),
  title: 'LeCode',
  description:
    'LeCode Enterprise specializes in web development and operates as an agency with expertise in React, JavaScript, Node.js, Electron, and Next.js.',
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
        <Analytics />
      </body>
    </html>
  );
}