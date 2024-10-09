import { useState } from 'react';
import { github, linkedin, email, copied } from './assets';

const About = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmail = () => {
    void navigator.clipboard.writeText('dkmshin@uw.edu');
    setCopiedEmail(true);
    setTimeout(function () {
      setCopiedEmail(false);
    }, 1000);
  };

  return (
    <section id="about">
      <h1>hi, i&apos;m daniel</h1>
      <div className="socials">
        <a
          href="https://www.github.com/danielkshin"
          target="_blank"
          rel="noreferrer"
        >
          <img src={github} />
        </a>
        <a
          href="https://www.linkedin.com/in/danielkshin"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} />
        </a>
        <img src={!copiedEmail ? email : copied} onClick={copyEmail} />
      </div>
      <p>
        to do: write <i>about me</i>
      </p>
    </section>
  );
};

export default About;
