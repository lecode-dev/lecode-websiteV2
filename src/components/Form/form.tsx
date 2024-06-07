'use client';

import Link from 'next/link';
import { Trans, useTranslation } from 'react-i18next';
import { ContactButton } from '../ContactButton';
import BgImage from '../../images/technology-mask.png';
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


export const Form = () => {
  const { t } = useTranslation();

  return (
    <Container id='contact'>
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
              <Trans i18nKey='contactUs.title' />
            </FormTitle>
            <FormSubtitle>{t('contactUs.subtitle')}</FormSubtitle>
          </FormTextContainer>

          <FormInputContainer>
            <FormInputContent>
              <FormLabel htmlFor='name'>{t('contactUs.labelCompanyName')}:</FormLabel>
              <FormInput type='text' />
            </FormInputContent>
            <FormInputContent>
              <FormLabel htmlFor='email'>{t('contactUs.labelEmail')}:</FormLabel>
              <FormInput type='email' />
            </FormInputContent>
          </FormInputContainer>
          <ContactButton>
            <Link
              href='#'
            >
              {t('contactUs.button')}
            </Link>
          </ContactButton>
        </FormContent>
      </FormContainer>
    </Container>
  );
};
