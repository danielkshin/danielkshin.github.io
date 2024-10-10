import { useState } from 'react';
import {
  instantGoals,
  hankel,
  colors,
  widget,
  colorsOriginal,
  novel,
  wordle,
  jump,
  bounce,
  omok,
  html,
  css,
  js,
  py,
  react,
  node,
} from './assets';

interface Project {
  name: string;
  description: string;
  link: string;
  image: string;
  languages: string[];
}

const projects: Project[] = [
  {
    name: 'instant goals',
    description: 'Goals and highlights on demand.',
    link: 'https://instantgoals.netlify.app',
    image: instantGoals,
    languages: [react, node, css],
  },
  {
    name: 'Hankel',
    description: 'A soccer planner.',
    link: 'https://danielkshin.github.io/Hankel',
    image: hankel,
    languages: [html, css, js],
  },
  {
    name: 'colors (remake)',
    description:
      'An original 2D platformer game with a unique mechanic around colors.',
    link: 'https://danielkshin.github.io/colors',
    image: colors,
    languages: [js],
  },
  {
    name: 'VOTD Lock Screen Widget',
    description:
      'A Scriptable lock screen widget that displays the YouVersion Bible verse of the day.',
    link: 'https://www.github.com/danielkshin/VOTD-Lock-Screen-Widget',
    image: widget,
    languages: [js],
  },
  {
    name: 'colors (original)',
    description:
      'An original 2D platformer game with a unique mechanic around colors.',
    link: 'https://danielkshin.github.io/APCSP-Projects/#colors',
    image: colorsOriginal,
    languages: [py],
  },
  {
    name: 'whatever this game is called',
    description: 'An interactive novel game.',
    link: 'https://danielkshin.github.io/APCSP-Projects/#whatever-this-game-is-called-an-interactive-novel',
    image: novel,
    languages: [py],
  },
  {
    name: 'WORDLE console',
    description: 'A WORDLE clone faithfully recreated in the console.',
    link: 'https://danielkshin.github.io/APCSP-Projects/#wordle-console',
    image: wordle,
    languages: [py],
  },
  {
    name: 'jump!',
    description: 'A 2D recreation of a 3D mini-game.',
    link: 'https://danielkshin.github.io/APCSP-Projects/#jump',
    image: jump,
    languages: [py],
  },
  {
    name: 'bounce!',
    description: 'A blatant Flappy Bird clone. Well, sort of.',
    link: 'https://danielkshin.github.io/APCSP-Projects/#bounce',
    image: bounce,
    languages: [py],
  },
  {
    name: 'omok',
    description:
      'A classic two-player game with the goal of forming a five-in-a-row.',
    link: 'https://danielkshin.github.io/APCSP-Projects/#omok',
    image: omok,
    languages: [py],
  },
];

const Projects = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="projects">
      <h1>projects</h1>
      {projects.slice(0, showMore ? projects.length : 3).map((project) => (
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          key={project.name}
        >
          <div className="card">
            <img src={project.image} />
            <p>
              <b>{project.name}</b>
              <br />
              {project.description}
            </p>
            <div className="languages">
              {project.languages.map((language) => (
                <img src={language} key={project.name + language} />
              ))}
            </div>
          </div>
        </a>
      ))}
      <p
        className="showMore"
        onClick={() => {
          setShowMore(!showMore);
        }}
      >
        <b>{!showMore ? 'show more' : 'show less'}</b>
      </p>
    </section>
  );
};

export default Projects;
