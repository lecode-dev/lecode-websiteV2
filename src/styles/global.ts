import styled, { createGlobalStyle } from 'styled-components';
export const GlobalStyle = createGlobalStyle`

* {
margin: 0;
padding: 0;
box-sizing: border-box;
scroll-behavior: smooth;
}

`;
export const Header1 = styled.h1`
  font-family: Montserrat, sans-serif;
  font-weight: bold;
  font-size: 48px;
  line-height: 125%;
  letter-spacing: 0;
  text-decoration: none;
  margin-top: 0;
  margin-bottom: 0;
  text-transform: none;
`;

export const Subtitle = styled.h2`
  font-family: Montserrat, sans-serif;
  font-weight: bold;
  font-size: 24px;
  line-height: 125%;
  letter-spacing: 0;
  text-decoration: none;
  margin-top: 0;
  margin-bottom: 0;
  text-transform: none;
`;

export const Header32 = styled.h3`
  font-family: Montserrat, sans-serif;
  font-weight: bold;
  font-size: 32px;
  line-height: 125%;
  letter-spacing: 0;
  text-decoration: none;
  margin-top: 0;
  margin-bottom: 0;
  text-transform: none;
`;

export const Header24 = styled.h4`
  font-family: Montserrat, sans-serif;
  font-weight: bold;
  font-size: 24px;
  line-height: 125%;
  letter-spacing: 0;
  text-decoration: none;
  margin-top: 0;
  margin-bottom: 0;
  text-transform: none;
`;
export const Subtitle2 = styled.h2`
  font-family: Montserrat, sans-serif;
  font-weight: bold;
  font-size: 24px;
  line-height: 125%;
  letter-spacing: 0;
  text-decoration: none;
  margin-top: 0;
  margin-bottom: 0;
  text-transform: none;
`;
export const Paragraph1 = styled.p`
  font-family: Poppins, sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 125%;
  letter-spacing: 0;
  text-decoration: none;
  margin-top: 0;
  margin-bottom: 0;
  text-transform: none;
`;
export const Paragraph2 = styled.p`
  font-family: Poppins, sans-serif;
  font-weight: 500;
  font-size: 20px;
  line-height: 125%;
  letter-spacing: 0;
  text-decoration: none;
  margin-top: 0;
  margin-bottom: 0;
  text-transform: none;
`;

export const ContactButton = styled.button`
  display: flex;
  width: fit-content;
  height: 3.25rem;
  padding: 1.5625rem 1.5rem;
  margin-left: 20rem;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 0.5rem;
  font-size: 1rem;
  border: none;
  background: var(--gradiente-cta, radial-gradient(708.43% 135.72% at 8.24% 0%, #04c17c 0%, #01b473 56%, #04c17c 100%));
  box-shadow: 0px 0px 8px 0px #00ab26, 0px 0px 1.9px 0px #fffafa;
  cursor: pointer;
  text-transform: uppercase;
  color: #FFFF;

  &:hover {
    background: var(
      --gradiente-cta,
      radial-gradient(708.43% 135.72% at 8.24% 0%, #02a267 0%, #01b473 56%, #02794e 100%)
    );
  }
`;
