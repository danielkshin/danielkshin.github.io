import { useState, ReactElement } from 'react';
import { SocialLinks, ProjectCarousel } from 'components';
import assets from 'assets';
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

type Language = 'react' | 'nodejs' | 'js' | 'css' | 'html' | 'py';

export interface ProjectDetails {
  name: string;
  description: string;
  link: string;
  image: string;
  languages: Language[];
  color: string;
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

const projectDetails: ProjectDetails[] = [
  {
    name: 'instant goals',
    description: 'Goals and highlights on demand.',
    link: 'https://instantgoals.netlify.app/',
    image: assets.instantGoals,
    languages: ['react', 'nodejs', 'css'],
    color: '#4362b5',
  },
  {
    name: 'Hankel',
    description: 'A soccer planner.',
    link: 'https://danielkshin.github.io/Hankel/',
    image: assets.hankel,
    languages: ['html', 'css', 'js'],
    color: '#79c086',
  },
  {
    name: 'colors',
    description:
      'An original 2D platformer game with a unique mechanic around colors.',
    link: 'https://danielkshin.github.io/colors',
    image: assets.colors,
    languages: ['js'],
    color: '#ffb464',
  },
  {
    name: 'VOTD Lock Screen Widget',
    description:
      'A Scriptable lock screen widget that displays the YouVersion Bible verse of the day.',
    link: 'https://www.github.com/danielkshin/VOTD-Lock-Screen-Widget',
    image: assets.widget,
    languages: ['js'],
    color: '#c4ceed',
  },
  {
    name: 'colors (original)',
    description:
      'An original 2D platformer game with a unique mechanic around colors.',
    link: 'https://danielkshin.github.io/APCSP-Projects/#colors',
    image: assets.colorsOriginal,
    languages: ['py'],
    color: '#8c8c8c',
  },
  {
    name: 'whatever this game is called',
    description: 'An interactive novel game.',
    link: 'https://danielkshin.github.io/APCSP-Projects/#whatever-this-game-is-called-an-interactive-novel',
    image: assets.novel,
    languages: ['py'],
    color: '#ef1059',
  },
  {
    name: 'WORDLE console',
    description: 'A WORDLE clone faithfully recreated in the console.',
    link: 'https://danielkshin.github.io/APCSP-Projects/#wordle-console',
    image: assets.wordle,
    languages: ['py'],
    color: '#22b14c',
  },
  {
    name: 'jump!',
    description: 'A 2D recreation of a 3D mini-game.',
    link: 'https://danielkshin.github.io/APCSP-Projects/#jump',
    image: assets.jump,
    languages: ['py'],
    color: '#e1ddbf',
  },
  {
    name: 'bounce!',
    description: 'A blatant Flappy Bird clone. Well, sort of.',
    link: 'https://danielkshin.github.io/APCSP-Projects/#bounce',
    image: assets.bounce,
    languages: ['py'],
    color: '#fa7869',
  },
  {
    name: 'omok',
    description:
      'A classic two-player game with the goal of forming a five-in-a-row.',
    link: 'https://danielkshin.github.io/APCSP-Projects/#omok',
    image: assets.omok,
    languages: ['py'],
    color: '#daa520',
  },
];

const useConfig = () => {
  const [projectsColor, setProjectsColor] = useState(projectDetails[0].color);

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
      content: (
        <>
          <p>I enjoy building random projects. Check them out!</p>
          <br />
          <ProjectCarousel
            projectDetails={projectDetails}
            changeProjectsColor={(color) => {
              setProjectsColor(color);
            }}
          />
        </>
      ),
      id: 'projects',
      backgroundColor: '#262626',
      textColor: '#f2f2f2',
      titleColor: projectsColor,
    },
  ];

  return config;
};

export default useConfig;
