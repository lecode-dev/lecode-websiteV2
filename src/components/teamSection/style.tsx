import Image from "next/image";
import styled from "styled-components";

export const TeamContainer = styled.div `
    
`
export const ContactLinkContainer = styled.div`
    background: #161918;
`

export const SectionContainer = styled.div `
    width: 100vw;
    height: fit-content;

`
export const ImageStyled = styled(Image)`
  cursor: pointer; 
`;

export const HiddenDiv = styled.div`
  display: none;
  background: #FFF;
`;

export const MyDivContainer = styled.div`
&:hover ${HiddenDiv} {
    display: block;
  }
 `;
 
export const ExpertiseButtonn = styled.button`
    display: flex;
padding: 0.625rem;
justify-content: center;
align-items: center;
gap: 0.625rem;

`