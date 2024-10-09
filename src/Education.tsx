import { UW } from './assets';

const Education = () => {
  return (
    <section id="education">
      <h1>education</h1>
      <div className="card">
        <img src={UW} />
        <p>
          <b>B.Sc. Computer Science</b>
          <br />
          <i>University of Washington, Seattle, WA</i>
          <br />
          September 2024 - Present
        </p>
      </div>
    </section>
  );
};

export default Education;
