import { FaLinkedin } from 'react-icons/fa';
import './SocialLinks.css';
import { IoIosMail, IoLogoGithub } from 'react-icons/io';

const SocialLinks = () => {
  return (
    <div className="social-links">
      <a
        href="https://www.linkedin.com/in/danielkshin/"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://www.github.com/danielkshin/"
        target="_blank"
        rel="noreferrer"
      >
        <IoLogoGithub />
      </a>
      <a href="mailto:dkmshin@uw.edu">
        <IoIosMail />
      </a>
    </div>
  );
};

export default SocialLinks;
