'use client';
import { useTranslation } from 'react-i18next';
import useCardsData, { type CardData } from '@/app/(data)/(process)/processes-data';
import CardSelectedNode from '@/app/(components)/(card)/card-selected-node';
import {
  MainTextContainer,
  ProcessProgressContainer,
  SessionProcessProgress,
  CenterContainerText,
  TextRow,
  LearnAboutText,
  WrapContainer,
  ContainerSelected,
} from './styles';

export const ProcessProgress = () => {
  const { t } = useTranslation();

  const cardsData: CardData[] = useCardsData();

  return (
    <SessionProcessProgress>
      <MainTextContainer>
        <CenterContainerText>
          <TextRow>
            <LearnAboutText color='black'>{t('process.mainLearnAbotBlack')}</LearnAboutText>
            <LearnAboutText color='green'>{t('process.mainLearnAbotGreen')}</LearnAboutText>
          </TextRow>
          <TextRow>
            <LearnAboutText color='black'>{t('process.subtitleLearnAbotBlack')}</LearnAboutText>
            <WrapContainer>
              <LearnAboutText color='green'>{t('process.subtitleLearnAbotGreen')}</LearnAboutText>
            </WrapContainer>
          </TextRow>
        </CenterContainerText>
      </MainTextContainer>
      <ProcessProgressContainer>
        <ContainerSelected>
          {cardsData.map((card: CardData, index: number) => (
            <CardSelectedNode
              key={index}
              cardsData={card}
            />
          ))}
        </ContainerSelected>
      </ProcessProgressContainer>
    </SessionProcessProgress>
  );
};
