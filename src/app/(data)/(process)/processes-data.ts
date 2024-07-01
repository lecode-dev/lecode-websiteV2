import { useTranslation } from 'react-i18next';

export interface CardData {
  number: string;
  title: string;
  subTitle: string;
}

const useCardsData = () => {
  const { t } = useTranslation();

  const cardsData: CardData[] = [
    {
      number: "1",
      title: t('process.cardTitle1'),
      subTitle: t('process.cardSubTitle1'),
    },
    {
      number: "2",
      title: t('process.cardTitle2'),
      subTitle: t('process.cardSubTitle2'),
    },
    {
      number: "3",
      title: t('process.cardTitle3'),
      subTitle: t('process.cardSubTitle3'),
    },
    {
      number: "4",
      title: t('process.cardTitle4'),
      subTitle: t('process.cardSubTitle4'),
    }
  ];

  return cardsData;
};

export default useCardsData;
