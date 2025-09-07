import { useState, useCallback, ReactNode } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import { i18nConfig } from '@/i18n';
import { Paragraph1 } from '@/styles/typographies';
import brazilFlag from '../../../public/brazil-flag.svg';
import euaFlag from '../../../public/eua-flag.svg';
import esFlag from '../../../public/spanish-flag.svg';
import { SelectContainer, OptionsContainer, Option, ContainerLanguage } from './styles';

const languageNames: Record<string, ReactNode> = {
  pt: <Image src={brazilFlag} alt="PT-BR" width={24} height={24} />,
  en: <Image src={euaFlag} alt="EN-US" width={24} height={24} />,
  es: <Image src={esFlag} alt="ES" width={24} height={24} />,
};

const languageFlags: Record<string, any> = {
  pt: brazilFlag,
  en: euaFlag,
  es: esFlag,
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
      setShowOptions(false);
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
          src={languageFlags[currentLocale]}
          alt="language icon in black"
          width={24}
          height={24}
        />
      </SelectContainer>
      {showOptions ? (
        <OptionsContainer>
          {languages
            .filter((lang) => lang !== currentLocale)
            .map((lang) => (
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