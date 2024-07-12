'use client';
import styled from "styled-components";
import { Montserrat, Poppins } from "next/font/google";
import { fonts } from "./fonts";

const poppins = Poppins({ weight: ['400'], style: ['normal'], subsets: ['latin'], display: 'swap' });
const montserrat = Montserrat({ weight: ['700'], style: ['normal'], subsets: ['latin'], display: 'swap' });


interface StyledComponentProps {
  fontFamily: string;
  fontWeight: string | number;
  fontSize: string;
  lineHeight: string;
}

export const createStyledHeading = (
  tag: keyof JSX.IntrinsicElements,
  { fontFamily, fontWeight, fontSize, lineHeight }: StyledComponentProps
) => styled(tag)`
  font-family: ${fontFamily}, sans-serif;
  font-weight: ${fontWeight};
  font-size: ${fontSize};
  line-height: ${lineHeight};
  letter-spacing: 0;
  text-decoration: none;
  margin-top: 0;
  margin-bottom: 0;
  text-transform: none;
`;

export const createStyledParagraph = (
  tag: keyof JSX.IntrinsicElements,
  { fontFamily, fontWeight, fontSize, lineHeight }: StyledComponentProps
) => styled(tag)`
  font-family: ${fontFamily}, sans-serif;
  font-weight: ${fontWeight};
  font-size: ${fontSize};
  line-height: ${lineHeight};
  letter-spacing: 0;
  text-decoration: none;
  margin-top: 0;
  margin-bottom: 0;
  text-transform: none;
`;

export const Header1 = createStyledHeading('h1', {
  fontFamily: 'Montserrat',
  fontWeight: fonts.bold,
  fontSize: '3rem',
  lineHeight: '125%'
});

export const Subtitle = createStyledHeading('h2', {
  fontFamily: montserrat.style.fontFamily,
  fontWeight: fonts.bold,
  fontSize: '1.5rem',
  lineHeight: '125%'
});

export const Header32 = createStyledHeading('h3', {
  fontFamily: montserrat.style.fontFamily,
  fontWeight: fonts.bold,
  fontSize: '2rem',
  lineHeight: '125%'
});

export const Header24 = createStyledHeading('h4', {
  fontFamily: montserrat.style.fontFamily,
  fontWeight: fonts.bold,
  fontSize: '1.5rem',
  lineHeight: '125%'
});

export const Paragraph1 = createStyledParagraph('p', {
  fontFamily: poppins.style.fontFamily,
  fontWeight: fonts.normal,
  fontSize: '1rem',
  lineHeight: '125%'
});

export const Paragraph2 = createStyledParagraph('p', {
  fontFamily: poppins.style.fontFamily,
  fontWeight: fonts.medium,
  fontSize: '1.25rem',
  lineHeight: '125%'
});
