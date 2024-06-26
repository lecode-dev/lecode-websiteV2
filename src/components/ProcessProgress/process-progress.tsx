'use client';
import cardsData, { type CardData } from '@/app/(data)/(process)/processes-data';
// import { useTranslation } from 'react-i18next';
import CardSelectedNode from '@/app/(components)/(card)/card-selected-node';
import {
  MainTextContainer,
  ProcessProgressContainer,
  SessionProcessProgress,
  CenterContainerText,
  TextRow,
  LearnAboutText,
  WrapContainer,
  ContainerSelected
} from './styles';

export const ProcessProgress = () => {
  // const { t } = useTranslation();

  return (
    <SessionProcessProgress>
      <MainTextContainer>
        <CenterContainerText>
          <TextRow>
            <LearnAboutText color='black'>Como iremos </LearnAboutText>
            <LearnAboutText color='green'>te ajudar</LearnAboutText>
          </TextRow>
          <TextRow>
            <LearnAboutText color='black'>a entregar seu</LearnAboutText>
            <WrapContainer>
              <LearnAboutText color='green'>projeto de tecnologia</LearnAboutText>
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
