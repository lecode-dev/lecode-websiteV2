"use client";

import { TestimonyContainer } from '@/components/Testimony';

export const Test = () => {
  const TestimonyData = [
    {
      id: '1',
      client: {
        name: 'John Doe',
        company: 'Company',
        role: 'Role',
        img: '',
      },
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: '2',
      client: {
        name: 'Jane Doe',
        company: 'Company',
        role: 'Role',
        img: '',
      },
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: '3',
      client: {
        name: 'John Smith',
        company: 'Company',
        role: 'Role',
        img: '',
      },
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  ];

  return (
    <div>
      <TestimonyContainer testimonies={TestimonyData} />
    </div>
  );
};

export default Test;
