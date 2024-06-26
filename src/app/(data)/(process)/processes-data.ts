export interface CardData {
  number: string;
  title: string;
  subTitle: string;
}

const cardsData: CardData[] = [
  {
    number: "1",
    title: "Briefing",
    subTitle: "Através de uma conversa faremos um briefing e entenderemos quais são suas necessidades para indicar os melhores perfis de profissionais para atender as suas demandas."
  },
  {
    number: "2",
    title: "Tempo hábil",
    subTitle: "Em poucos dias será apresentada uma lista de profissionais selecionados para que você também possa avaliar e aprovar."
  },
  {
    number: "3",
    title: "Alocação",
    subTitle: "Após a aprovação, nosso profissional será alocado em até 7 dias dentro da sua empresa, sem perda de tempo e sem burocracia."
  },
  {
    number: "4",
    title: "Acompanhamento",
    subTitle: "Enquanto nossos profissionais estiverem à sua disposição, faremos todo o acompanhamento e monitoramento do desempenho para garantir a máxima eficiência na entrega do trabalho."
  }
];

export default cardsData;
