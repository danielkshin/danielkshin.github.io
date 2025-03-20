import { ReactElement } from 'react';
import { SocialLinks } from 'components';
import confetti from 'canvas-confetti';
import './Config.css';

export interface SectionDetails {
  title: string;
  content: ReactElement;
  id: string;
  backgroundColor: string;
  textColor: string;
  titleColor: string;
}

const fireConfetti = () => {
  (confetti as (options?: confetti.Options) => void)({
    particleCount: 100,
    spread: 80,
    startVelocity: 40,
    origin: { y: 0.6 },
    colors: ['#ff9900', '#146eb4', '#232f3e', '#f2f2f2'],
  });
};

const config: SectionDetails[] = [
  {
    title: 'daniel',
    content: (
      <>
        <p>cs @ uw | incoming sde intern @ amazon</p>
        <br />
        <SocialLinks />
      </>
    ),
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
          this summer in Seattle! I&apos;m very grateful for this opportunity
          and can&apos;t for the summer.
        </p>
        <br />
        <p className="celebrate" onClick={fireConfetti}>
          <u>Celebrate!</u>
        </p>
      </>
    ),
    id: 'experience',
    backgroundColor: '#232f3e',
    textColor: '#f2f2f2',
    titleColor: '#ff9900',
  },
  {
    title: 'a dev',
    content: <p>I enjoy building random projects. Check them out!</p>,
    id: 'projects',
    backgroundColor: '#262626',
    textColor: '#f2f2f2',
    titleColor: '#676eba',
  },
];

export { config };
