import { useTranslation } from 'react-i18next';
import TechnologyMask from '@/images/technology-mask.png';
import { ContactButton } from '../ContactButton';
import { BgImage, ContactContainer, Header, Paragraph, TextContainer, StyledLink } from './style';

export const ContactTeam = () => {
  const { t } = useTranslation();

  return (
    <ContactContainer>
      <TextContainer>
        <Header>{t('contactTeam.title')}</Header>
        <Paragraph>{t('contactTeam.description')}</Paragraph>
      </TextContainer>
      <ContactButton>
        <StyledLink href='#contact'>{t('contactTeam.button')}</StyledLink>
      </ContactButton>
      <BgImage
        src={TechnologyMask}
        alt='Background Image'
      />
    </ContactContainer>
  );
};
