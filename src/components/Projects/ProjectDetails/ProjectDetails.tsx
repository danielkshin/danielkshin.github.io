import './ProjectDetails.css';

interface ProjectDetailsProps {
  project: {
    name: string;
    description: string;
    link: string;
  };
}

const ProjectDetails = (props: ProjectDetailsProps) => {
  const project = props.project;

  return (
    <div className="project-details">
      <a href={project.link} target="_blank" rel="noreferrer">
        <p>
          <b>{project.name}</b>
        </p>
        <p>{project.description}</p>
      </a>
    </div>
  );
};

export default ProjectDetails;
