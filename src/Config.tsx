import * as assets from 'assets';

interface Social {
  link: string;
  image: string;
}

interface Education {
  degree: string;
  school: string;
  date: string;
  image: string;
}

interface Experience {
  title: string;
  company: string;
  date: string;
  image: string;
}

interface Project {
  name: string;
  description: string;
  link: string;
  image: string;
  languages: string[];
}

interface Config {
  about: {
    description: string;
    socials: Social[];
  };
  education: Education[];
  experience: Experience[];
  projects: Project[];
}

const config: Config = {
  about: {
    description:
      'I am a freshman studying computer science at the Paul G. Allen School of Computer Science and Engineering at the University of Washington.',
    socials: [
      {
        link: 'https://www.github.com/danielkshin',
        image: assets.github,
      },
      {
        link: 'https://www.linkedin.com/in/danielkshin',
        image: assets.linkedin,
      },
    ],
  },
  education: [
    {
      degree: 'High School Diploma',
      school: 'Curtis Senior High School, University Place, WA',
      date: 'September 2020 - June 2024',
      image: assets.curtis,
    },
    {
      degree: 'B.Sc. Computer Science',
      school: 'University of Washington, Seattle, WA',
      date: 'September 2024 - Present',
      image: assets.UW,
    },
  ],
  experience: [
    {
      title: "Computer Science Teacher's Assistant",
      company: 'Curtis Senior High School, University Place WA',
      date: 'September 2023 - June 2024',
      image: assets.curtis,
    },
    {
      title: 'Software Development Engineer Intern',
      company: 'Amazon, Seattle, WA',
      date: 'June 2025 - September 2025',
      image: assets.amazon,
    },
  ],
  projects: [
    {
      name: 'instant goals',
      description: 'Goals and highlights on demand.',
      link: 'https://instantgoals.netlify.app',
      image: assets.instantGoals,
      languages: [assets.react, assets.node, assets.css],
    },
    {
      name: 'Hankel',
      description: 'A soccer planner.',
      link: 'https://danielkshin.github.io/Hankel',
      image: assets.hankel,
      languages: [assets.html, assets.css, assets.js],
    },
    {
      name: 'colors (remake)',
      description:
        'An original 2D platformer game with a unique mechanic around colors.',
      link: 'https://danielkshin.github.io/colors',
      image: assets.colors,
      languages: [assets.js],
    },
    {
      name: 'VOTD Lock Screen Widget',
      description:
        'A Scriptable lock screen widget that displays the YouVersion Bible verse of the day.',
      link: 'https://www.github.com/danielkshin/VOTD-Lock-Screen-Widget',
      image: assets.widget,
      languages: [assets.js],
    },
    {
      name: 'colors (original)',
      description:
        'An original 2D platformer game with a unique mechanic around colors.',
      link: 'https://danielkshin.github.io/APCSP-Projects/#colors',
      image: assets.colorsOriginal,
      languages: [assets.py],
    },
    {
      name: 'whatever this game is called',
      description: 'An interactive novel game.',
      link: 'https://danielkshin.github.io/APCSP-Projects/#whatever-this-game-is-called-an-interactive-novel',
      image: assets.novel,
      languages: [assets.py],
    },
    {
      name: 'WORDLE console',
      description: 'A WORDLE clone faithfully recreated in the console.',
      link: 'https://danielkshin.github.io/APCSP-Projects/#wordle-console',
      image: assets.wordle,
      languages: [assets.py],
    },
    {
      name: 'jump!',
      description: 'A 2D recreation of a 3D mini-game.',
      link: 'https://danielkshin.github.io/APCSP-Projects/#jump',
      image: assets.jump,
      languages: [assets.py],
    },
    {
      name: 'bounce!',
      description: 'A blatant Flappy Bird clone. Well, sort of.',
      link: 'https://danielkshin.github.io/APCSP-Projects/#bounce',
      image: assets.bounce,
      languages: [assets.py],
    },
    {
      name: 'omok',
      description:
        'A classic two-player game with the goal of forming a five-in-a-row.',
      link: 'https://danielkshin.github.io/APCSP-Projects/#omok',
      image: assets.omok,
      languages: [assets.py],
    },
  ],
};

const about = config.about;
const education = config.education;
const experience = config.experience;
const projects = config.projects;

export { about, education, experience, projects };
