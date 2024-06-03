'use client';
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
} from './styles';
import Image from 'next/image';
import reactLogo from '../../../public/react-logo.svg';
import cSharpLogo from '../../../public/c-logo.svg';
import azureLogo from '../../../public/azure-logo.svg';

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
    </TechnologyContainer>
  );
};
