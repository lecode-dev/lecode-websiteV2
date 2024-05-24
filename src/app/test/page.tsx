import { TestimonyContainer } from './(components)/(testimony)/testimony-container';
import ClientMock1 from '@/imgs/client-mock-1.png';
import ClientMock2 from '@/imgs/client-mock-2.png';

export const Test = () => {
  const TestimonyData = [
    {
      id: '1',
      testimony: {
        client: {
          name: 'Jane Doe',
          company: 'Company',
          role: 'Role',
          img: ClientMock1.src,
        },
        text: '"Contratar a equipe da Lecode foi crucial para alavancar meu negócio. Eles resolveram nossos problemas técnicos e nos orientaram com soluções inovadoras. O suporte contínuo deles é excepcional. Recomendo totalmente!"',
      },
    },
    {
      id: '2',
      testimony: {
        client: {
          name: 'John Smith',
          company: 'Company',
          role: 'Role',
          img: ClientMock2.src,
        },
        text: '"Estou extremamente satisfeito com os serviços prestados pela LeCode. Sua expertise, abordagem colaborativa e transparência nos fizeram sentir parte do processo. Desde que começamos a trabalhar com eles, nossa eficiência operacional aumentou significativamente."',
      },
    },
    {
      id: '3',
      testimony: {
        client: {
          name: 'Jane Doe',
          company: 'Company',
          role: 'Role',
          img: ClientMock2.src,
        },
        text: '"Estou extremamente satisfeito com os serviços prestados pela LeCode. Sua expertise, abordagem colaborativa e transparência nos fizeram sentir parte do processo. Desde que começamos a trabalhar com eles, nossa eficiência operacional aumentou significativamente."',
      },
    },
  ];

  return <TestimonyContainer testimonies={TestimonyData} />;
};

export default Test;
