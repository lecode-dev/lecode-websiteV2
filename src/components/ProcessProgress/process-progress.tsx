'use client';
// import { useTranslation } from 'react-i18next';
import {
  MainTextContainer,
  ProcessProgressContainer,
  SessionProcessProgress,
  CenterContainerText,
  TextRow,
  LearnAboutText,
  WrapContainer
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
        <p>a</p>
      </ProcessProgressContainer>
    </SessionProcessProgress>
  );
};
