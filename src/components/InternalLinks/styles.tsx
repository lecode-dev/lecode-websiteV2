import styled from 'styled-components';
import Link from 'next/link';
import { Styles } from '@/styles';

export const NavLinks = styled.div`
  display: flex;
  padding: 0.625rem;
  justify-content: center;
  align-items: center;
  gap: 1.25rem;
  color: ${({ theme }) => theme.colors.black};
  font-size: 1rem;
`;

export const StyledLink = styled(Link)`
  &:hover {
    color: ${({ theme }) => theme.colors.hover.mainGreen};
  }
`;