import { IoIosArrowForward } from 'react-icons/io';
import './ProjectCarousel.css';
import { useRef } from 'react';
import assets from 'assets';

const projects = [
  {
    name: 'instant goals',
    description: 'goals and highlights on demand',
    link: 'https://instantgoals.netlify.app/',
    image: assets.instantGoals,
    color: '#FFD700',
  },
  {
    name: 'hankel',
    description: 'a soccer planner',
    link: 'https://danielkshin.github.io/Hankel/',
    image: assets.hankel,
    color: '#79c086',
  },
  {
    name: 'colors (remake)',
    descripton:
      'an original 2d platformer game with a unique mechanic around colors',
    link: 'https://danielkshin.github.io/colors',
    image: assets.colors,
    color: '#ffb464',
  },
];

const ProjectCarousel = () => {
  const projectCarouselRef = useRef<HTMLDivElement>(null);
  const currentProjectRef = useRef<number>(0);

  const scroll = () => {
    console.log(assets.bounce);
    const container = projectCarouselRef.current;

    if (!container) return;

    currentProjectRef.current += 1;

    if (currentProjectRef.current >= projects.length) {
      currentProjectRef.current = 0;
      container.scrollBy({
        left: -44 * (projects.length - 1),
        behavior: 'smooth',
      });
    } else {
      container.scrollBy({ left: 44, behavior: 'smooth' });
    }
    document.body.style.setProperty(
      '--title-color',
      projects[currentProjectRef.current].color
    );
  };

  return (
    <div className="project-carousel-container">
      <div className="project-carousel" ref={projectCarouselRef}>
        {projects.map((project) => (
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
      <IoIosArrowForward onClick={scroll} />
    </div>
  );
};

export default ProjectCarousel;
