'use client';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Trans, useTranslation } from 'react-i18next';
import { send } from 'emailjs-com';
import { useState } from 'react';
import { motion } from 'framer-motion';
import BgImage from '@/images/technology-mask.svg';
import { ContactButton } from '../ContactButton';
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

  const schema = z.object({
    name: z.string().min(1, t('formValidation.requiredName')),
    email: z.string().email(t('formValidation.invalidEmail')).min(1, t('formValidation.requiredEmail')),
  });

  type FormData = z.infer<typeof schema>;
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });
  const [loading, setLoading] = useState(false);

  const spinnerVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 1,
        repeat: Infinity,
        ease: 'linear',
      },
    },
  };

  const onSubmit = async (data: FormData) => {
    const serviceId = process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      toast.error(t('toastEmailStatus.errorEmailConfig'));
      return;
    }

    setLoading(true);

    try {
      await send(
        serviceId,
        templateId,
        {
          from_name: data.name,
          to_name: 'LeCode',
          message: `You have a new message from ${data.name} (${data.email}).`,
        },
        publicKey,
      );

      toast.success(t('toastEmailStatus.successEmail'));
      reset();
    } catch (error) {
      toast.error(t('toastEmailStatus.failedEmail'));
    } finally {
      setLoading(false);
    }
  };

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
        <FormContent onSubmit={handleSubmit(onSubmit)}>
          <FormTextContainer>
            <FormTitle>
              <Trans i18nKey='contactUs.title' />
            </FormTitle>
            <FormSubtitle>{t('contactUs.subtitle')}</FormSubtitle>
          </FormTextContainer>

          <FormInputContainer>
            <FormInputContent>
              <FormLabel htmlFor='name'>{t('contactUs.labelCompanyName')}:</FormLabel>
              <FormInput
                type='text'
                id='name'
                {...register('name')}
              />
              {errors.name ? <p>{errors.name.message}</p> : null}
            </FormInputContent>
            <FormInputContent>
              <FormLabel htmlFor='email'>{t('contactUs.labelEmail')}:</FormLabel>
              <FormInput
                type='email'
                id='email'
                {...register('email')}
              />
              {errors.email ? <p>{errors.email.message}</p> : null}
            </FormInputContent>
          </FormInputContainer>
          <ContactButton type='submit'>
            {loading ? (
              <motion.div
                style={{
                  border: '4px solid rgba(0, 0, 0, 0.1)',
                  borderRadius: '50%',
                  borderTop: '4px solid #09f',
                  width: '24px',
                  height: '24px',
                }}
                variants={spinnerVariants}
                animate='animate'
              />
            ) : (
              t('contactUs.button')
            )}
          </ContactButton>
        </FormContent>
      </FormContainer>
      <ToastContainer autoClose={3000} />
    </Container>
  );
};
