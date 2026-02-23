import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/Providers/ThemeProvider/theme-provider';
import { ResetCSS, GlobalCSS } from '@/styles';
import { Analytics } from '@/components/Analytics';
import { LocaleLangSync } from '@/components/LocaleLangSync/locale-lang-sync';

export const metadata: Metadata = {
  metadataBase: new URL('https://lecode.dev'),
  title: 'LeCode',
  description:
    'LeCode Enterprise specializes in web development and operates as an agency with expertise in React, JavaScript, Node.js, Electron, and Next.js.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" suppressHydrationWarning>
      <body>
        <LocaleLangSync />
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