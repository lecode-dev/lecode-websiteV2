'use client';
import Image from 'next/image';
import { StyledMaskTechnology , StyledMaskTechnologyInvert } from '@/app/(components)/(testimony)/styles';
import TechnologyMask from '@/images/technology-mask.png';
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
} from './styles';


interface TechnologyContainerProps {
  id: string;
}

export const TechnologyBanner = ({ id }: TechnologyContainerProps) => {
  return (
    <TechnologyContainer id={id}>
      <ContainerMainText>
        <TextRow>
          <LearnAboutText color='green'>Conheça as</LearnAboutText>
          <LearnAboutText color='white'>tecnologias</LearnAboutText>
        </TextRow>
        <TextRow>
          <LearnAboutText color='green'>que o time da</LearnAboutText>
          <WrapContainer>
            <LearnAboutText color='white'>Le code</LearnAboutText>
            <LearnAboutText color='green'>domina</LearnAboutText>
          </WrapContainer>
        </TextRow>
        <MoreTechnologiesText>As tecnologias mais atuais em prol da efiência e performance</MoreTechnologiesText>
      </ContainerMainText>

      <ContainerTechnology>
        <CardTechnology>
          <TitleCardTechnology>Front-end</TitleCardTechnology>
          <Image
            alt='React logo'
            src={reactLogo}
          />
          <MainTitleTechnology>React</MainTitleTechnology>
          <TechnologyDescription>
            Utilizamos este e outros frameworks conhecidos como os melhores do mercado
          </TechnologyDescription>
          <OthersFrameworksText>Outros frameworks que utilizamos:</OthersFrameworksText>
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
          <Image
            alt='C# logo'
            src={cSharpLogo}
          />
          <MainTitleTechnology>React</MainTitleTechnology>
          <TechnologyDescription>
            Desenvolvemos uma estrutura robusta, com integrações e APIs para otimizar o desempenho.
          </TechnologyDescription>
          <OthersFrameworksText>Outros frameworks que utilizamos:</OthersFrameworksText>
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
          <Image
            alt='Azure logo'
            src={azureLogo}
          />
          <MainTitleTechnology>Azure</MainTitleTechnology>
          <TechnologyDescription>
            Gerenciamos a infraestrutura dos projetos com o que há de melhor no mercado.
          </TechnologyDescription>
          <OthersFrameworksText>Outros frameworks que utilizamos:</OthersFrameworksText>
          <UnorderedListTecnology>
            <ListTecnologys>SQL Server</ListTecnologys>
            <ListTecnologys>AWS</ListTecnologys>
            <ListTecnologys>Github</ListTecnologys>
            <ListTecnologys>ConsumosDB</ListTecnologys>
            <ListTecnologys>Cloudnary</ListTecnologys>
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
