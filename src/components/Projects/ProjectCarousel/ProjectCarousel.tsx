import './ProjectCarousel.css';
import { ProjectDetails as ProjectDetailsType } from 'Config';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import {
  FaCss3Alt,
  FaHtml5,
  FaSquareJs,
  FaNodeJs,
  FaPython,
  FaReact,
  FaUnity,
} from 'react-icons/fa6';
import { TbBrandCSharp } from 'react-icons/tb';

const languages = {
  react: <FaReact />,
  nodejs: <FaNodeJs />,
  js: <FaSquareJs />,
  css: <FaCss3Alt />,
  html: <FaHtml5 />,
  py: <FaPython />,
  'c#': <TbBrandCSharp />,
  unity: <FaUnity />,
};

interface ProjectCarouselProps {
  scroll: (direction: 'next' | 'prev') => void;
  currentProject: number;
  projectDetails: ProjectDetailsType[];
}

const ProjectCarousel = (props: ProjectCarouselProps) => {
  const currentProject = props.currentProject;
  const projectDetails = props.projectDetails;

  return (
    <div className="project-carousel-container">
      <div className="project-carousel-with-arrow">
        <IoIosArrowBack
          onClick={() => {
            props.scroll('prev');
          }}
          style={{ cursor: 'pointer' }}
        />
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
            props.scroll('next');
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
