import Image from 'next/image';
import ErickProfile from '../../../public/erick-profile-img.png';
import KarenProfile from '../../../public/karen-profile-img.png';
import NatanProfile from '../../../public/natan-profile-img.png';

export const members = [
  {
    name: 'Erick Willian',
    expertise: ['#C', 'NodeJS', 'React', 'DEVops'],
    charge: 'Full-Stack Developer',
    img: (
      <Image
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
      <Image
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
      <Image
        src={NatanProfile}
        alt=''
      />
    ),
  },
];
