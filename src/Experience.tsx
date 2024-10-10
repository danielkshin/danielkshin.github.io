import { curtis } from './assets';

const Experience = () => {
  return (
    <section id="experience">
      <h1>experience</h1>
      <div className="card">
        <img src={curtis} />
        <p>
          <b>Computer Science Teacher&apos;s Assistant</b>
          <br />
          <i>Curtis Senior High School</i>
          <br />
          September 2023 - June 2024
        </p>
      </div>
    </section>
  );
};

export default Experience;
