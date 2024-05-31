import {NavLinks, StyledLink } from './styles';
import { Changa } from 'next/font/google';

const changa = Changa({ weight: ['500'], style: ['normal'], subsets: ['latin'], display: 'swap' });

export const InternalLinks = () =>{
   return (
    <NavLinks className={changa.className}>
    <StyledLink href='#about'>Quem Somos</StyledLink>
    <StyledLink href='#technologies'>Nossas Habilidades</StyledLink>
    <StyledLink href='#cases'>Cases</StyledLink>
    <StyledLink href='#team'>Equipe</StyledLink>
    <StyledLink href='#clients'>Clientes</StyledLink>
  </NavLinks>
   ) 
};
