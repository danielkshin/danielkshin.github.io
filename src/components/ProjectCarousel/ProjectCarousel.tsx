import { IoIosArrowForward } from 'react-icons/io';
import './ProjectCarousel.css';
import { useRef } from 'react';
import { ProjectDetails } from 'Config';

interface ProjectCarouselProps {
  changeProjectsColor: (color: string) => void;
  projectDetails: ProjectDetails[];
}

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
        <div className="project-carousel" ref={projectCarouselRef}>
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
      <div>
        <p>
          <b>{projectDetails[currentProjectRef.current].name}</b>
        </p>
        <p>{projectDetails[currentProjectRef.current].description}</p>
      </div>
    </div>
  );
};

export default ProjectCarousel;
