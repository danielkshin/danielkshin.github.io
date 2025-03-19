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
      <>
        <p>September 2024 - Present </p>
        <br />
        <p>
          I am a first-year student studying Computer Science at the Paul G.
          Allen School of Computer Science & Engineering at the University of
          Washington.
        </p>
      </>
    ),
    id: 'education',
    backgroundColor: '#4b2e83',
    textColor: '#f2f2f2',
    titleColor: '#b7a57a',
  },
  {
    title: 'an intern',
    content: (
      <>
        <p>Starting June 2025</p>
        <br />
        <p>
          I will be joining Amazon as a Software Development Engineer Intern
          this summer in Seattle!
        </p>
      </>
    ),
    id: 'experience',
    backgroundColor: '#232f3e',
    textColor: '#ff9900',
    titleColor: '#f2f2f2',
  },
  {
    title: 'a dev',
    content: <p>I enjoy building random projects. Check them out!</p>,
    id: 'projects',
    backgroundColor: '#f2f2f2',
    textColor: '#121212',
    titleColor: '#dc7b5a',
  },
];

export { config };
