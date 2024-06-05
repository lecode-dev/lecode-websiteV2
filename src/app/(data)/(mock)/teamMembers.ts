import ErickProfile from '../../../../public/erick-profile-img.png';
import KarenProfile from '../../../../public/karen-profile-img.png';
import NatanProfile from '../../../../public/natan-profile-img.png';
import intagramLogo from '../../../imgs/github-icon.svg';
import teste from '../../../imgs/gmail-icon.svg';
import teste3 from '../../../imgs/linkedln-icon.svg';


export const TeamMembers = [
  {
    id: '1',
    profile: {
      name: 'Erick Willian',
      expertise: [
        intagramLogo,
        teste,
        teste3
      ],
      charge: 'Full-Stack Developer',
      img: ErickProfile,

    },
  },
  {
    id: '2',
    profile: {
      name: 'Káren Myllena',
      expertise: [
        intagramLogo,
        teste,
        teste3
      ],
      charge: 'Web Developer',
      img: KarenProfile,
    },
  },
  {
    id: '3',
    profile: {
      name: 'Natan Erico',
      expertise: [
        intagramLogo,
        teste,
        teste3
      ],
      charge: 'Full-Stack Developer',
      img: NatanProfile,
    },
  },
];
