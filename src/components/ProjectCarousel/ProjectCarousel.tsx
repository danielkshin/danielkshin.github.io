import { IoIosArrowForward } from 'react-icons/io';
import './ProjectCarousel.css';
import { useRef } from 'react';
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
  const projectCarouselRef = useRef<HTMLDivElement>(null);
  const currentProjectRef = useRef<number>(0);
  const projectDetails = props.projectDetails;

  const scroll = () => {
    const container = projectCarouselRef.current;

    if (!container) return;

    currentProjectRef.current += 1;

    if (currentProjectRef.current >= projectDetails.length) {
      currentProjectRef.current = 0;
      container.scrollBy({
        left: -36 * (projectDetails.length - 1),
        behavior: 'smooth',
      });
    } else {
      container.scrollBy({ left: 36, behavior: 'smooth' });
    }

    props.changeProjectsColor(projectDetails[currentProjectRef.current].color);
    document.body.style.setProperty(
      '--title-color',
      projectDetails[currentProjectRef.current].color
    );
  };

  return (
    <div className="projects-container">
      <div className="project-carousel-container">
        <div className="project-carousel">
          <div className="project-carousel-icons" ref={projectCarouselRef}>
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
          <IoIosArrowForward onClick={scroll} style={{ cursor: 'pointer' }} />
        </div>
        <div className="project-languages">
          {projectDetails[currentProjectRef.current].languages.map((lang) => (
            <div key={lang}>{languages[lang]}</div>
          ))}
        </div>
      </div>
      <div className="project-details">
        <a
          href={projectDetails[currentProjectRef.current].link}
          target="_blank"
          rel="noreferrer"
        >
          <p>
            <b>{projectDetails[currentProjectRef.current].name}</b>
          </p>
          <p>{projectDetails[currentProjectRef.current].description}</p>
        </a>
      </div>
    </div>
  );
};

export default ProjectCarousel;
