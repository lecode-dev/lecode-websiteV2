'use client';
import { useTranslation } from 'react-i18next';
import TechnologyMask from '@/images/technology-mask.svg';
import reactLogo from '../../../public/react-logo.svg';
import cSharpLogo from '../../../public/c-logo.svg';
import azureLogo from '../../../public/azure-logo.svg';
import {
  ContainerMainText,
  ContainerTechnology,
  LearnAboutText,
  TechnologyContainer,
  TextRow,
  MoreTechnologiesText,
  CardTechnology,
  TitleCardTechnology,
  MainTitleTechnology,
  TechnologyDescription,
  OthersFrameworksText,
  UnorderedListTecnology,
  ListTecnologys,
  WrapContainer,
  StyledMaskTechnology,
  StyledMaskTechnologyInvert,
  StyledImage
} from './styles';

interface TechnologyContainerProps {
  id: string;
}

export const TechnologyBanner = ({ id }: TechnologyContainerProps) => {
  const { t } = useTranslation();

  return (
    <TechnologyContainer id={id}>
      <ContainerMainText>
        <TextRow>
          <LearnAboutText color='green'>&nbsp;{t('technology.title')}&nbsp;</LearnAboutText>
          <LearnAboutText color='white'>{t('technology.technologies')}</LearnAboutText>
        </TextRow>
        <TextRow>
          <LearnAboutText color='green'>{t('technology.thatTheTeam')}</LearnAboutText>
          <WrapContainer>
            <LearnAboutText color='white'>&nbsp;LeCode&nbsp;</LearnAboutText>
            <LearnAboutText color='green'>{t('technology.dominates')}</LearnAboutText>
          </WrapContainer>
        </TextRow>
        <MoreTechnologiesText>{t('technology.subtitle')}</MoreTechnologiesText>
      </ContainerMainText>

      <ContainerTechnology>
        <CardTechnology>
          <TitleCardTechnology>Front-end</TitleCardTechnology>
          <StyledImage
           alt='React logo'
           src={reactLogo}
          ></StyledImage>
          <MainTitleTechnology></MainTitleTechnology>
          <TechnologyDescription>{t('technology.subtitleFrontEnd')}</TechnologyDescription>
          <OthersFrameworksText>{t('technology.therFrameworks')}</OthersFrameworksText>
          <UnorderedListTecnology>
            <ListTecnologys>React Native</ListTecnologys>
            <ListTecnologys>Javascript</ListTecnologys>
            <ListTecnologys>SASS/CSS3</ListTecnologys>
            <ListTecnologys>Typescript</ListTecnologys>
            <ListTecnologys>Visual Code</ListTecnologys>
          </UnorderedListTecnology>
        </CardTechnology>

        <CardTechnology>
          <TitleCardTechnology>Back-end</TitleCardTechnology>
          <StyledImage
            alt='C# logo'
            src={cSharpLogo}
          />
          <MainTitleTechnology></MainTitleTechnology>
          <TechnologyDescription>{t('technology.subtitleBackEnd')}</TechnologyDescription>
          <OthersFrameworksText>{t('technology.therFrameworks')}</OthersFrameworksText>
          <UnorderedListTecnology>
            <ListTecnologys>PHP</ListTecnologys>
            <ListTecnologys>Python</ListTecnologys>
            <ListTecnologys>Ruby</ListTecnologys>
            <ListTecnologys>Node.js</ListTecnologys>
            <ListTecnologys>Visual Basic</ListTecnologys>
          </UnorderedListTecnology>
        </CardTechnology>

        <CardTechnology>
          <TitleCardTechnology>Infraestrutura</TitleCardTechnology>
          <StyledImage
            alt='Azure logo'
            src={azureLogo}
          />
          <MainTitleTechnology></MainTitleTechnology>
          <TechnologyDescription>{t('technology.subtitleInfra')}</TechnologyDescription>
          <OthersFrameworksText>{t('technology.therFrameworks')}</OthersFrameworksText>
          <UnorderedListTecnology>
            <ListTecnologys>SQL Server</ListTecnologys>
            <ListTecnologys>AWS</ListTecnologys>
            <ListTecnologys>Github</ListTecnologys>
            <ListTecnologys>CosmosDB</ListTecnologys>
            <ListTecnologys>Cloudinary</ListTecnologys>
            <ListTecnologys>Auth0</ListTecnologys>
          </UnorderedListTecnology>
        </CardTechnology>
      </ContainerTechnology>
      <StyledMaskTechnologyInvert
        src={TechnologyMask}
        alt='technology-mask-styled-invert'
      />
      <StyledMaskTechnology
        src={TechnologyMask}
        alt='technology-mask-styled'
      />
    </TechnologyContainer>
  );
};
