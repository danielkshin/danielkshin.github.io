import './Projects.css';
import { useState } from 'react';
import { ProjectDetails as ProjectDetailsType } from 'Config';
import { ProjectCarousel, ProjectDetails } from 'components';

interface ProjectsProps {
  changeProjectsColor: (color: string) => void;
  projectDetails: ProjectDetailsType[];
}

const Projects = (props: ProjectsProps) => {
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
    <div className="projects">
      <ProjectCarousel
        scroll={scroll}
        projectDetails={projectDetails}
        currentProject={currentProject}
      />
      <ProjectDetails project={projectDetails[currentProject]} />
    </div>
  );
};

export default Projects;
