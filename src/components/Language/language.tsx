import { useState, useCallback } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import { i18nConfig } from '@/i18n';
import languageIcon from '../../../public/language.svg';
import { Select, SelectContainer, OptionsContainer } from './styles';

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
    [currentLocale, currentPathname, router]
  );

  const handleIconClick = () => {
    setShowOptions(!showOptions);
  };

  const handleIconKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter') {
      setShowOptions(!showOptions);
    }
  };

  return (
    <SelectContainer>
      <div
        tabIndex={0} 
        role="button" 
        onClick={handleIconClick}
        onKeyPress={handleIconKeyPress} 
      >
        <Image
          src={languageIcon}
          alt='language icon in black'
          width={24} 
          height={24} 
        />
      {showOptions ? <OptionsContainer>
          <Select
            value={currentLocale}
            onChange={(e) => {
              handleChange(e.target.value);
            }}
          >
            {languages.map((lang) => (
              <option
                key={lang}
                value={lang}
              >
                {lang}
              </option>
            ))}
          </Select>
        </OptionsContainer> : null}
      </div>

    </SelectContainer>
  );
};
