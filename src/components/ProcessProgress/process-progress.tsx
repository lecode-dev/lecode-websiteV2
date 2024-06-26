'use client';
// import { useTranslation } from 'react-i18next';
import lecodeLogoBackground from '../../../public/light-lecode-logo.svg';
import {
  MainTextContainer,
  ProcessProgressContainer,
  SessionProcessProgress,
  CenterContainerText,
  TextRow,
  LearnAboutText,
  WrapContainer,
  ContainerSelectedNode,
  CardSelectedNode,
  NumberText,
  TextContentArea,
  TitleCard,
  SubTitleCard,
  LeCodeLogoBackground,
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
        <ContainerSelectedNode>
          <CardSelectedNode>
            <LeCodeLogoBackground
              src={lecodeLogoBackground}
              alt='le-code-logo-background'
            />
            <NumberText>1</NumberText>
            <TextContentArea>
              <TitleCard>Briefing</TitleCard>
              <SubTitleCard>
                Através de uma conversa faremos um briefing e entenderemos quais são suas necessidades para indicar os
                melhores perfis de profissionais para atender as suas demandas.
              </SubTitleCard>
            </TextContentArea>
          </CardSelectedNode>
          <CardSelectedNode>
            <LeCodeLogoBackground
              src={lecodeLogoBackground}
              alt='le-code-logo-background'
            />
            <NumberText>1</NumberText>
            <TextContentArea>
              <TitleCard>Briefing</TitleCard>
              <SubTitleCard>
                Através de uma conversa faremos um briefing e entenderemos quais são suas necessidades para indicar os
                melhores perfis de profissionais para atender as suas demandas.
              </SubTitleCard>
            </TextContentArea>
          </CardSelectedNode>
        </ContainerSelectedNode>
      </ProcessProgressContainer>
    </SessionProcessProgress>
  );
};
