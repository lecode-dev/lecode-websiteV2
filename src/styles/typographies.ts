'use client';
import styled from "styled-components";
import { fonts } from "./fonts";



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
  fontSize: '3em',
  lineHeight: '125%'
});

export const Subtitle = createStyledHeading('h2', {
  fontFamily: 'Montserrat',
  fontWeight: fonts.bold,
  fontSize: '1.5em',
  lineHeight: '125%'
});

export const Header32 = createStyledHeading('h3', {
  fontFamily: 'Montserrat',
  fontWeight: fonts.bold,
  fontSize: '2em',
  lineHeight: '125%'
});

export const Header24 = createStyledHeading('h4', {
  fontFamily: 'Montserrat',
  fontWeight: fonts.bold,
  fontSize: '1.5em',
  lineHeight: '125%'
});

export const Paragraph1 = createStyledParagraph('p', {
  fontFamily: 'Poppins',
  fontWeight: fonts.normal,
  fontSize: '1em',
  lineHeight: '125%'
});

export const Paragraph2 = createStyledParagraph('p', {
  fontFamily: 'Poppins',
  fontWeight: fonts.medium,
  fontSize: '1.25em',
  lineHeight: '125%'
});
