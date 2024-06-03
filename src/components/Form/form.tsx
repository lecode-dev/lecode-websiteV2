'use client';

import { Poppins } from 'next/font/google';
import Link from 'next/link';
import { ContactButton } from '../ContactButton';
import BgImage from '../../imgs/technology-mask.png';
import {
  BackgroundImageRight,
  BackgroundImageLeft,
  Container,
  FormContainer,
  FormContent,
  FormInput,
  FormInputContainer,
  FormLabel,
  FormSubtitle,
  FormTextContainer,
  FormTitle,
  FormInputContent,
  BackgroundImageContainer,
} from './styles';

const poppins = Poppins({ weight: ['600'], style: ['normal'], subsets: ['latin'], display: 'swap' });

export const Form = () => {
  return (
    <Container>
      <FormContainer>
        <BackgroundImageContainer>
          <BackgroundImageLeft
            src={BgImage}
            alt='Background Image'
          />
          <BackgroundImageRight
            src={BgImage}
            alt='Background Image'
          />
        </BackgroundImageContainer>
        <FormContent>
          <FormTextContainer>
            <FormTitle>
              Vamos <span>juntos</span> tornar seu <span>negócio único</span>?
            </FormTitle>
            <FormSubtitle>Entre em contato conosco para avaliarmos o que podemos fazer pela sua equipe</FormSubtitle>
          </FormTextContainer>

          <FormInputContainer>
            <FormInputContent>
              <FormLabel htmlFor='name'>Nome da sua Empresa:</FormLabel>
              <FormInput type='text' />
            </FormInputContent>
            <FormInputContent>
              <FormLabel htmlFor='email'>Email:</FormLabel>
              <FormInput type='email' />
            </FormInputContent>
          </FormInputContainer>
          <ContactButton>
            <Link
              href='#'
              className={poppins.className}
            >
              Entre em contato
            </Link>
          </ContactButton>
        </FormContent>
      </FormContainer>
    </Container>
  );
};
