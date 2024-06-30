"use client";
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: white;
  transition: all 0.3s ease;
  z-index: 10;
  @media (min-width: 768px) {
    display: none;
  }

  &.scrolled {
    background-color: transparent;
  }
`;

const Logo = styled.div`
  text-align: center;
  padding: 1rem;
  font-size: 1.5rem;
  font-weight: bold;
  transition: all 0.3s ease;

  &.scrolled {
    opacity: 0;
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  padding: 1rem 0;
  opacity: 0;
  transition: all 0.3s ease;

  &.scrolled {
    opacity: 1;
  }
`;

const NavLink = styled.a`
  color: black;
  text-decoration: none;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:hover {
    text-decoration: underline;
  }
`;

export const HeaderMobile = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Header className={scrolled ? 'scrolled' : ''}>
      <Logo className={scrolled ? 'scrolled' : ''}>Logo</Logo>
      <Nav className={scrolled ? 'scrolled' : ''}>
        <NavLink href="#page1">Página 1</NavLink>
        <NavLink href="#page2">Página 2</NavLink>
        <NavLink href="#page3">Página 3</NavLink>
        <NavLink href="#page4">Página 4</NavLink>
      </Nav>
    </Header>
  );
};

export default HeaderMobile;
