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

type Language = 'react' | 'nodejs' | 'js' | 'css' | 'html';

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
    description: 'goals and highlights on demand',
    link: 'https://instantgoals.netlify.app/',
    image: assets.instantGoals,
    languages: ['react', 'nodejs', 'css'],
    color: '#4362b5',
  },
  {
    name: 'hankel',
    description: 'a soccer planner',
    link: 'https://danielkshin.github.io/Hankel/',
    image: assets.hankel,
    languages: ['html', 'css', 'js'],
    color: '#79c086',
  },
  {
    name: 'colors (remake)',
    description:
      'an original 2d platformer game with a unique mechanic around colors',
    link: 'https://danielkshin.github.io/colors',
    image: assets.colors,
    languages: ['js'],
    color: '#ffb464',
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
