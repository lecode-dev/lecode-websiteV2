import Image from 'next/image';
import styled from 'styled-components';
import { Header32, Paragraph1, Styles } from '@/styles';


export const SectionContainer = styled.div`
  position: relative;
  width: 100vw;
  height: fit-content;
  display: flex;
  gap: 5em;
  margin: 5em 8em;

  @media (${Styles.sizes.laptop}) {
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin: auto;
  }
`;

export const TeamContainer = styled.div`
  display: flex;
  height: 26.125rem;
  gap: 2em;

  @media (${Styles.sizes.laptop}) {
    gap: 1em;
  }

  @media (${Styles.sizes.tabletL}) {
    display: none;
  }
`;

export const ImageStyled = styled(Image)`
  cursor: pointer;
`;

export const ExpertiseButtonn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ExpertiseButton = styled.button`
  background-color:transparent;
  border: none;
  cursor: pointer;
  padding:0.5em;
  color: #333;
  transition: transform 0.3s ease;
  gap: 2em;
  border-radius: 1.25rem;
  border: 1px solid  #161918;
  font-size: 1rem;

  &:hover{
    filter: invert(1);
  }
`;

export const MemberContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  font-size: 1.25em;
  gap: 5%;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.7);
  color: ${({ theme }) => ` ${theme.shadows.black}`};
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;

  ${MemberContainer}:hover & {
    opacity: 1;
  }
`;

export const OverlayText = styled.li`
  font-size: 1.125rem;
  text-align: center;
`;

export const ButtonContainer = styled.div `
display: flex;
width: 100%;
justify-content: space-between;
align-items: center;
`

export const MemberTeamName = styled.p`
  gap: 5%;
  width: 30%;
`

export const ContactLinkContainer = styled.div`
  background: #161918;
  width: 22em;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-left: 2em;
  text-align: left;

  @media (${Styles.sizes.laptop}) {
    width: 100%;
    margin:  10% 3%;
    height: 21.6875rem;
    align-items: center;
    padding: 0;
    text-align: center;
  }
`;

export const Paragraph1Styled = styled(Paragraph1) `
 text-transform: uppercase;
 color: ${({ theme }) => ` ${theme.shadows.white}`};
 width: 80%;

`
export const StyledHeader2 = styled(Header32)`
color: #0EC281;
width: 80%;
font-weight: 500;
`