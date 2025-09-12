import karenProfile from '../../../../public/karen-profile.jpg';
import leroy from '../../../../public/leroy.png';
import joaoProfile from '../../../../public/joao-profile.jpg';
import typeScript from '../../../../public/typescript.svg'
import nextJS from '../../../../public/nextjs.svg'
import nodeJs from '../../../../public/nodejs.svg'
import electron from '../../../../public/electron.svg'
import webpack from '../../../../public/webpack.svg'
import agile from '../../../../public/agile.svg'
import calendar from '../../../../public/calendar.svg'
import jira from '../../../../public/jira.svg'



export const TeamMembers = [
  {
    id: '1',
    profile: {
      name: 'Victor Le Roy',
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
        jira,
        calendar,
        agile,
      ],
      charge: 'Project Manager',
      img: karenProfile,
    },
  },
 
];
