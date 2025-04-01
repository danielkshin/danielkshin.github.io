import './ProjectCarousel.css';
import { ProjectDetails as ProjectDetailsType } from 'Config';
import { IoIosArrowForward } from 'react-icons/io';
import {
  FaCss3Alt,
  FaHtml5,
  FaJsSquare,
  FaNodeJs,
  FaPython,
  FaReact,
} from 'react-icons/fa';

const languages = {
  react: <FaReact />,
  nodejs: <FaNodeJs />,
  js: <FaJsSquare />,
  css: <FaCss3Alt />,
  html: <FaHtml5 />,
  py: <FaPython />,
};

interface ProjectCarouselProps {
  scroll: () => void;
  currentProject: number;
  projectDetails: ProjectDetailsType[];
}

const ProjectCarousel = (props: ProjectCarouselProps) => {
  const currentProject = props.currentProject;
  const projectDetails = props.projectDetails;

  return (
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
        <IoIosArrowForward
          onClick={() => {
            props.scroll();
          }}
          style={{ cursor: 'pointer' }}
        />
      </div>
      <div className="project-languages">
        {projectDetails[currentProject].languages.map((lang) => (
          <div key={lang}>{languages[lang]}</div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCarousel;
