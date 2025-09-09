import karenProfile from '../../../../public/karen-profile.jpg';
import leroy from '../../../../public/leroy.png';
import joaoProfile from '../../../../public/joao-profile.jpg';
import typeScript from '../../../../public/typescript.svg'
import react from '../../../../public/react.svg'
import nextJS from '../../../../public/nextjs.svg'
import nodeJs from '../../../../public/nodejs.svg'
import electron from '../../../../public/electron.svg'
import webpack from '../../../../public/webpack.svg'


export const TeamMembers = [
  {
    id: '1',
    profile: {
      name: 'Victor Leroy',
      expertise: [
        nodeJs,
        typeScript,
        nextJS
      ],
      charge: 'Full-Stack Developer',
      img: leroy,

    },
  },
  {
    id: '2',
    profile: {
      name: 'João Guilherme Santiago',
      expertise: [
        nodeJs,
        electron,
        webpack
      ],
      charge: 'Full-Stack Developer',
      img: joaoProfile,
    },
  },
  {
    id: '3',
    profile: {
      name: 'Káren Myllena Gonçalves',
      expertise: [
        typeScript,
        nextJS,
        react,
      ],
      charge: 'Web Developer',
      img: karenProfile,
    },
  },
 
];
