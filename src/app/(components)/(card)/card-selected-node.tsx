import { type CardData } from '../../(data)/(process)/processes-data';
import lecodeLogoBackground from '../../../../public/light-lecode-logo.svg';
import { CardContainer, LeCodeLogoBackground, NumberText, TextContentArea, TitleCard, SubTitleCard } from './style';

interface CardDataProps {
  cardsData: CardData;
}

const CardSelectedNode = ({ cardsData }: CardDataProps) => (
  <CardContainer>
    <LeCodeLogoBackground
      src={lecodeLogoBackground}
      alt='le-code-logo-background'
    />
    <NumberText>{cardsData.number}</NumberText>
    <TextContentArea>
      <TitleCard>{cardsData.title}</TitleCard>
      <SubTitleCard>{cardsData.subTitle}</SubTitleCard>
    </TextContentArea>
  </CardContainer>
);

export default CardSelectedNode;
