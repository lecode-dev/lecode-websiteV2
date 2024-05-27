'use client';
import {  ThemeProvider as BaseTheme } from 'styled-components';
import { defaultTheme } from '@/styles/themes/default';
import { PropsWithChildren } from 'react';

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  return <BaseTheme theme={defaultTheme}>{children}</BaseTheme>;
}