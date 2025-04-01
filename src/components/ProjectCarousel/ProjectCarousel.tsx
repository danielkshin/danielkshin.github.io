import { IoIosArrowForward } from 'react-icons/io';
import './ProjectCarousel.css';
import { useState } from 'react';
import { ProjectDetails } from 'Config';
import {
  FaCss3Alt,
  FaHtml5,
  FaJsSquare,
  FaNodeJs,
  FaPython,
  FaReact,
} from 'react-icons/fa';

interface ProjectCarouselProps {
  changeProjectsColor: (color: string) => void;
  projectDetails: ProjectDetails[];
}

const languages = {
  react: <FaReact />,
  nodejs: <FaNodeJs />,
  js: <FaJsSquare />,
  css: <FaCss3Alt />,
  html: <FaHtml5 />,
  py: <FaPython />,
};

const ProjectCarousel = (props: ProjectCarouselProps) => {
  const [currentProject, setCurrentProject] = useState(0);
  const projectDetails = props.projectDetails;
  const [isScrolling, setIsScrolling] = useState(false);

  const scroll = () => {
    if (isScrolling) return;
    setIsScrolling(true);

    const newIndex = (currentProject + 1) % projectDetails.length;
    setCurrentProject(newIndex);
    props.changeProjectsColor(projectDetails[newIndex].color);

    setTimeout(() => {
      setIsScrolling(false);
    }, 500);
  };

  return (
    <div className="projects-container">
      <div className="project-carousel-container">
        <div className="project-carousel-with-arrow">
          <div className="project-carousel">
            <div
              className="project-carousel-icons"
              style={{
                transform: `translateX(-${String(currentProject * 100)}%)`,
              }}
            >
              {projectDetails.map((project) => (
                <a
                  href={project.link}
                  key={project.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={project.image}></img>
                </a>
              ))}
            </div>
          </div>
          <IoIosArrowForward onClick={scroll} style={{ cursor: 'pointer' }} />
        </div>
        <div className="project-languages">
          {projectDetails[currentProject].languages.map((lang) => (
            <div key={lang}>{languages[lang]}</div>
          ))}
        </div>
      </div>
      <div className="project-details">
        <a
          href={projectDetails[currentProject].link}
          target="_blank"
          rel="noreferrer"
        >
          <p>
            <b>{projectDetails[currentProject].name}</b>
          </p>
          <p>{projectDetails[currentProject].description}</p>
        </a>
      </div>
    </div>
  );
};

export default ProjectCarousel;
