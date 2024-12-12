'use client'
import styled from "styled-components";
import { Styles } from '@/styles';

export const Content = styled.div`
  overflow-x: hidden;
`;

export const ScrollbarWrapper = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  scrollbar-color: ${({ theme }) => theme.colors.gray};
  direction: ltr; // Show the scrollbar on the right: ;
  scroll-behavior: smooth;
  background-color: white;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px grey;
    border-radius: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background:  ${({ theme }) => theme.colors.black};
;
    border-radius: 15px;
    height: 2px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.mainGreen};
    max-height: 10px;
  }

  @media (${Styles.devices.tabletL}) {
    scrollbar-width: none;
  }
`;