import { ReactElement } from 'react';
import { SocialLinks } from 'components';

export interface SectionDetails {
  title: string;
  content: ReactElement;
  id: string;
  backgroundColor: string;
  textColor: string;
  titleColor: string;
}

const config: SectionDetails[] = [
  {
    title: 'daniel',
    content: <SocialLinks />,
    id: 'about',
    backgroundColor: '#f2f2f2',
    textColor: '#121212',
    titleColor: '#5aa57b',
  },
  {
    title: 'a student',
    content: (
      <p>
        I am a freshman studying computer science at the Paul G. Allen School of
        Computer Science and Engineering at the University of Washington.
      </p>
    ),
    id: 'education',
    backgroundColor: '#4b2e83',
    textColor: '#f2f2f2',
    titleColor: '#b7a57a',
  },
  {
    title: 'an intern',
    content: (
      <p>I am an incoming SDE intern at Amazon for the summer of 2025.</p>
    ),
    id: 'experience',
    backgroundColor: '#232f3e',
    textColor: '#ff9900',
    titleColor: '#f2f2f2',
  },
  {
    title: 'a dev',
    content: <p>test</p>,
    id: 'projects',
    backgroundColor: '#ff0000',
    textColor: '#121212',
    titleColor: '#33dd33',
  },
];

export { config };
