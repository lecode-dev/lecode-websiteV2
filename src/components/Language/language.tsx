import { useState, useCallback } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import { i18nConfig } from '@/i18n';
import { Paragraph1 } from '@/styles/typographies';
import languageIcon from '../../../public/language.svg';
import { SelectContainer, OptionsContainer, Option, ContainerLanguage } from './styles';

const languageNames: Record<string, string> = {
  pt: 'Português',
  en: 'English',
};

export const Language: React.FC = () => {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();
  const [showOptions, setShowOptions] = useState<boolean>(false);

  const languages = i18nConfig.locales;

  const handleChange = useCallback(
    (newLocale: string) => {
      console.log('newLocale', newLocale);
      const days = 30;
      const date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      const expires = `; expires=${date.toUTCString()}`;
      document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

      if (currentLocale === i18nConfig.defaultLocale) {
        router.push(`/${newLocale}${currentPathname}`);
      } else {
        router.push(currentPathname.replace(`/${currentLocale}`, `/${newLocale}`));
      }

      router.refresh();
    },
    [currentLocale, currentPathname, router],
  );

  const handleIconClick = () => {
    setShowOptions(!showOptions);
  };

  return (
    <ContainerLanguage>
      <SelectContainer
        tabIndex={0}
        onClick={handleIconClick}
      >
        <Image
          src={languageIcon}
          alt='language icon in black'
          width={24}
          height={24}
        />
      </SelectContainer>
      {showOptions ? (
        <OptionsContainer>
          {languages.map((lang) => (
            <Option
              key={lang}
              onClick={() => {
                handleChange(lang);
              }}
            >
              <Paragraph1>{languageNames[lang]}</Paragraph1>
            </Option>
          ))}
        </OptionsContainer>
      ) : null}
    </ContainerLanguage>
  );
};
