import Image from 'next/image';
import styled from 'styled-components';
import { Paragraph1, Styles } from '@/styles';
import { Mask } from '@/app/(components)/(testimony)/styles';

export const SectionContainer = styled.div`
  position: relative;
  width: 100vw;
  height: fit-content;
  display: flex;
  gap: 1.30vw;
  margin: 5em 8em;

  @media (${Styles.devices.laptop}) {
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin: auto;
  }
`;

export const TeamContainer = styled.div`
width: fit-content;
  display: flex;
  height: 26.125rem;
  gap: 2%;

  @media (${Styles.devices.laptop}) {
    gap: 1%;
  }

  @media (${Styles.devices.tabletL}) {
    display: none;
  }
`;

export const StyledImage = styled(Image)`
  cursor: pointer;
`;

export const ExpertiseButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0.5%;
  color: #333;
  transition: transform 0.3s ease;
  gap: 2%;
  border-radius: 1.25rem;
  border: 1px solid #161918;
  font-size: 1rem;

  &:hover {
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

export const ButtonContainer = styled.div`
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const MemberTeamName = styled.p`
  gap: 5%;
  width: 30%;
`;

export const ContactLinkContainer = styled.div`
  background: #161918;
  width: 27.08vw;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-left: 2em;
  text-align: left;

  @media (${Styles.devices.laptop}) {
    width: 100vw;
    margin: 10% 3%;
    height: 21.6875rem;
    align-items: center;
    padding: 0;
    text-align: center;
  }

  @media (${Styles.devices.tabletL}) {
    width: 60vw;
    margin: 10% 3%;
    height: 21.6875rem;
    align-items: center;
    padding: 0;
    text-align: center;
  }
`;

export const Paragraph1Styled = styled(Paragraph1)`
  text-transform: uppercase;
  color: ${({ theme }) => ` ${theme.colors.white}`};
  width: 80%;
  margin-bottom: 6em;

  @media (${Styles.devices.laptop}) {
    margin: 0px;
    width: 60%;
  }
`;

export const StyledMask = styled(Mask)`
  left: 0;
  object-fit: cover;
`

