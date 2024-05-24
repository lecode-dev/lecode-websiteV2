'use client';
import { ThemeProvider as Theme } from 'styled-components';
import { defaultTheme } from '@/styles/themes/default';
import { PropsWithChildren } from 'react';

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  return <Theme theme={defaultTheme}>{children}</Theme>;
};
