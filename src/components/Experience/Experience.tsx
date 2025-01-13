import { experience } from 'Config';

const Experience = () => {
  return (
    <section id="experience">
      <h1>experience</h1>
      {experience.map((experience) => (
        <div className="card" key={experience.title + experience.company}>
          <img src={experience.image} />
          <p>
            <b>{experience.title}</b>
            <br />
            <i>{experience.company}</i>
            <br />
            {experience.date}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Experience;
