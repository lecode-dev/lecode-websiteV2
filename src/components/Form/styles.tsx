import styled from 'styled-components';
import Image from 'next/image';
import { Montserrat } from 'next/font/google';
import { Styles } from '@/styles';

const montserratTitle = Montserrat({ weight: ['700'], style: ['normal'], subsets: ['latin'], display: 'swap' });
const montserratSubtitle = Montserrat({ weight: ['500'], style: ['normal'], subsets: ['latin'], display: 'swap' });

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  padding-top: 8rem; // 10px
  background: ${({ theme }) => theme.colors.white};
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2.25rem 0.5rem; // 36px 8px
  width: 80%;
  height: 33.75rem; // 540px
  background-color: black;
  position: relative;
  z-index: 1;
  overflow: hidden;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const BackgroundImageContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
`;

export const BackgroundImageRight = styled(Image)`
  position: absolute;
  right: -12rem; // -192px
  top: -14rem; // -224px
  width: 35.9375rem; // 575px
  height: 34.05125rem; // 544.81px
  object-fit: cover;
  opacity: 50%;
  z-index: -1;

  @media (${Styles.devices.tablet}) {
    display: none;
  }
`;

export const BackgroundImageLeft = styled(Image)`
  position: absolute;
  left: -14rem; // -224px
  top: 8rem; // 128px
  width: 35.9375rem; // 575px
  height: 34.05125rem; // 544.81px
  object-fit: cover;
  opacity: 50%;
  z-index: -1;

  @media (${Styles.devices.tablet}) {
    width: 115%;
    height: 100%;
    left: -4.375rem; // -70px
    top: 0;
  }
`;

export const FormContent = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem; // 32px
  width: 100%;
  max-width: 37.5rem; // 600px
`;

export const FormTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem; // 32px
  width: 100%;
  position: relative;
  z-index: 2;
`;

export const FormTitle = styled.h1`
  font-size: 3rem; // 48px
  font-weight: bold;
  font-family: ${montserratTitle.style.fontFamily};
  color: #ffffff;
  text-align: center;
  width: 100%;
  max-width: 37.5rem; // 600px
  min-width: 21.625rem; // 346px
  line-height: 3.65625rem; // 58.51px

  span {
    color: ${({ theme }) => theme.colors.textGreen};
  }

  @media (${Styles.devices.tablet}) {
    font-size: 1.75rem; // 28px
    line-height: 2.133125rem; // 34.13px
  }
`;

export const FormSubtitle = styled.p`
  font-size: 1rem; // 16px
  font-weight: normal;
  font-family: ${montserratSubtitle.style.fontFamily};
  color: #ffffff;
  text-transform: uppercase;
  text-align: center;
  width: 80%;
  min-width: 19.875rem; // 318px
  line-height: 1.21875rem; // 19.5px
`;

export const FormInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem; // 24px
  width: 80%;
  height: 9.75rem; // 156px

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const FormInputContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 0.375rem; // 6px
  width: 80%;
  height: 4.125rem; // 66px
`;

export const FormLabel = styled.label`
  font-size: 0.75rem; // 12px
  font-weight: normal;
  font-family: 'Poppins', sans-serif;
  color: #ffffff;
  width: 8.8125rem; // 141px
  height: 1.125rem; // 18px
  line-height: 1.125rem; // 18px
`;

export const FormInput = styled.input`
  width: 100%;
  height: 2.625rem; // 42px
  padding: 0.5rem; // 8px
  border: 1px solid #000000;
  border-radius: 0.25rem; // 4px
  background-color: #ffffff;
  color: #000000;
`;
