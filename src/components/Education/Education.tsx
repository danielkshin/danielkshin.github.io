import { education } from 'Config';

const Education = () => {
  return (
    <section id="education">
      <h1>education</h1>
      {education.map((education) => (
        <div className="card" key={education.degree + education.school}>
          <img src={education.image} />
          <p>
            <b>{education.degree}</b>
            <br />
            <i>{education.school}</i>
            <br />
            {education.date}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Education;
