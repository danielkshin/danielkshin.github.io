import { useState } from 'react';
import { projects } from './Config';

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
