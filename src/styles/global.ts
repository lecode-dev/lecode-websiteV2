import styled, { createGlobalStyle, CSSProperties } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

interface StyledComponentProps {
  fontFamily: string;
  fontWeight: string | number;
  fontSize: string;
  lineHeight: string;
}

const createStyledHeading = (
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

const createStyledParagraph = (
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
  fontWeight: 'bold',
  fontSize: '48px',
  lineHeight: '125%'
});

export const Subtitle = createStyledHeading('h2', {
  fontFamily: 'Montserrat',
  fontWeight: 'bold',
  fontSize: '24px',
  lineHeight: '125%'
});

export const Header32 = createStyledHeading('h3', {
  fontFamily: 'Montserrat',
  fontWeight: 'bold',
  fontSize: '32px',
  lineHeight: '125%'
});

export const Header24 = createStyledHeading('h4', {
  fontFamily: 'Montserrat',
  fontWeight: 'bold',
  fontSize: '24px',
  lineHeight: '125%'
});

export const Paragraph1 = createStyledParagraph('p', {
  fontFamily: 'Poppins',
  fontWeight: '400',
  fontSize: '16px',
  lineHeight: '125%'
});

export const Paragraph2 = createStyledParagraph('p', {
  fontFamily: 'Poppins',
  fontWeight: '500',
  fontSize: '20px',
  lineHeight: '125%'
});
