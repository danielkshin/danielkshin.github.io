import { useState } from 'react';
import { email, copied } from 'assets';
import { about } from 'Config';

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
        {about.socials.map((social) => (
          <a
            href={social.link}
            target="_blank"
            rel="noreferrer"
            key={social.link}
          >
            <img src={social.image} />
          </a>
        ))}
        <img src={!copiedEmail ? email : copied} onClick={copyEmail} />
      </div>
      <p>{about.description}</p>
    </section>
  );
};

export default About;
