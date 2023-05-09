import { BsGithub } from 'react-icons/bs';
import { RiWindowFill } from 'react-icons/ri';

export const ProjectList = [
  {
    Title: 'Ollae',
    SubTitle: 'Loaction based community platform',
    Introduce:
      'It is a platform that provides dating services to members of single households or new generations who want to start a relationship with a casual meeting that is not deeply related to their personal lives.',
    Img: '/assets/OlleaGrid.png',
    Alt: 'OlleaGrid',
    CardNumber: [
      {
        Number: '1',
        Content:
          'Categories allow you to find people or gatherings to take a walk by choosing the topic you want.',
      },
      {
        Number: '2',
        Content:
          'With the map view, you can easily find the meeting place and see the meeting walking around you.',
      },
      {
        Number: '3',
        Content:
          'Live chat allows you to arrange a specific meeting with the person you want to walk with.',
      },
    ],
    SkilsItem: [
      'React',
      'React-Query',
      'Recoil',
      'TypeScripte',
      'Firebase',
      'Vercel',
      'Figma',
    ],
    Site: [
      {
        Icon_name: <BsGithub />,
        Site: 'https://github.com/Jinyang-Park/ProjectWalkTogether',
      },
      {
        Icon_name: <RiWindowFill />,
        Site: 'https://www.ollae.kr/',
      },
    ],
  },
  {
    Title: 'Bounce',
    SubTitle:
      'Global fandom platform for the fans and artists around the world',
    Introduce:
      'The Bounce web platforms is artist-to-fan interactions and platforms for users to connect with each other.',
    Img: '/assets/Bounce.png',
    Alt: 'Bounce',
    CardNumber: [
      {
        Number: '1',
        Content:
          'Can see the YouTube video list of each artists official channel.',
      },
      {
        Number: '2',
        Content: 'Users can like Button and comment on artists videos.',
      },
    ],
    SkilsItem: [
      'React',
      'Redux-toolkit',
      'Redux-Thunk',
      'Axios',
      'TypeScript',
      'Firebase',
      'Vercel',
      'Figma',
      'Illustrator',
    ],
    Site: [
      {
        Icon_name: <BsGithub />,
        Site: 'https://github.com/Jinyang-Park/no-sunday',
      },
      {
        Icon_name: <RiWindowFill />,
        Site: 'https://no-sunday.vercel.app/',
      },
    ],
  },
  {
    Title: 'ApplePet',
    SubTitle: 'Adopt a pet',
    Introduce:
      'Search dogs, cats, rabbits, birds for adoption from thousands of shelters and rescue groups.',
    Img: '/assets/Applepet13.png',
    Alt: 'ApplePet',
    CardNumber: [
      {
        Number: '1',
        Content: 'Filter based on location and breed.',
      },
      {
        Number: '2',
        Content: 'View photos and detail of adoptable dogs and cats.',
      },
      {
        Number: '3',
        Content:
          'Contact shelters quickly and easily to start the adoption process.',
      },
    ],
    SkilsItem: [
      'React-Native',
      'Redux-toolkit',
      'Axios',
      'Firebase',
      'Vercel',
      'Illustrator',
      'Figma',
    ],
    Site: [
      {
        Icon_name: <BsGithub />,
        Site: 'https://github.com/Jinyang-Park/TeamApple',
      },
    ],
  },
];
