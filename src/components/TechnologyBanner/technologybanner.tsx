'use client';
import {
  ContainerMainText,
  ContainerSubText,
  ContainerTechnology,
  LearnAboutText,
  TechnologyContainer,
  TextRow,
  MoreTechnologiesText,
} from './styles';

export const TechnologyBanner = () => {
  return (
    <TechnologyContainer>
      <ContainerMainText>
        <TextRow>
          <LearnAboutText color='green'>Conheça as</LearnAboutText>
          <LearnAboutText color='white'>tecnologias</LearnAboutText>
        </TextRow>
        <TextRow>
          <LearnAboutText color='green'>que o time da</LearnAboutText>
          <LearnAboutText color='white'>Le code</LearnAboutText>
          <LearnAboutText color='green'>domina</LearnAboutText>
        </TextRow>
          <MoreTechnologiesText>As tecnologias mais atuais em prol da efiência e performance</MoreTechnologiesText>
      </ContainerMainText>

      <ContainerTechnology>
        <p>a</p>
      </ContainerTechnology>
    </TechnologyContainer>
  );
};
