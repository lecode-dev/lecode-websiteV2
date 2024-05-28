import { Header1 } from '@/styles';
import { device } from '@/styles/sizes';
import styled from 'styled-components';

export const TechnologyContainer = styled.div`
  height: 878px;
  background: ${({ theme }) => theme.colors.mainBlack};
  @media ${device.tablet} {
    width: 1917px;
  }
`;
export const LearnAboutText = styled(Header1)`

  text-align: center;
  color: ${({ theme }) => theme.colors.white};
`;
