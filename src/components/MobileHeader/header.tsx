// src/components/Header.tsx

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header<{ isTransparent: boolean }>`
  position: fixed;
  top: 0;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  background-color: ${({ isTransparent }) => (isTransparent ? 'transparent' : '#333')};
  transition: background-color 0.3s ease;
  z-index: 1000;
`;

const HamburgerButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 24px;
  width: 30px;

  span {
    display: block;
    height: 4px;
    width: 100%;
    background-color: #fff;
    border-radius: 2px;
  }
`;

const Header: React.FC = () => {
  const [isTransparent, setIsTransparent] = useState(true);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsTransparent(false);
    } else {
      setIsTransparent(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <HeaderContainer isTransparent={isTransparent}>
      <div>Logo</div>
      <HamburgerButton>
        <span />
        <span />
        <span />
      </HamburgerButton>
    </HeaderContainer>
  );
};

export default Header;
