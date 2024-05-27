import ErickProfile from '../../../public/erick-profile-img.png';
import KarenProfile from '../../../public/karen-profile-img.png';
import NatanProfile from '../../../public/natan-profile-img.png';
import { ImageStyled } from './style';

export const members = [
  {
    name: 'Erick Willian',
    expertise: ['#C', 'NodeJS', 'React', 'DEVops'],
    charge: 'Full-Stack Developer',
    img: (
      <ImageStyled
        src={ErickProfile}
        alt=''
      />
    ),
  },
  {
    name: 'Káren Myllena',
    expertise: ['ReactJS', 'NextJS', 'Cypress', 'NodeJS'],
    charge: 'Web Developer',
    img: (
      <ImageStyled
        src={KarenProfile}
        alt=''
      />
    ),
  },
  {
    name: 'Natan Erico',
    expertise: ['', '', ''],
    charge: 'Full-Stack Developer',
    img: (
      <ImageStyled
        src={NatanProfile}
        alt=''
      />
    ),
  },
];
