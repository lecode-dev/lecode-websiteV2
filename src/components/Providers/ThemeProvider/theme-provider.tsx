'use client';
import type { PropsWithChildren } from 'react';
import {  ThemeProvider as BaseTheme } from 'styled-components';
import { defaultTheme } from '@/styles/themes/default';

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  return <BaseTheme theme={defaultTheme}>{children}</BaseTheme>;
}