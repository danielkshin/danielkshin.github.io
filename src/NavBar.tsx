import { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { theme } from './assets/';

interface NavBarProps {
  dark: boolean;
  setDark: Dispatch<SetStateAction<boolean>>;
}

const NavBar = ({ dark, setDark }: NavBarProps) => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const sections = ['about', 'education', 'experience', 'projects'];

    const handleScroll = () => {
      const currentPosition = window.scrollY + 1;

      sections.forEach((section) => {
        const sectionElement = document.getElementById(section);
        if (!sectionElement) return;

        if (
          currentPosition > sectionElement.offsetTop &&
          currentPosition <
            sectionElement.offsetTop + sectionElement.offsetHeight
        ) {
          setActiveSection(section);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
  });

  const changeTheme = () => {
    localStorage.setItem('dark', (!dark).toString());
    setDark(!dark);
  };

  return (
    <nav>
      <h1>daniel shin</h1>
      <a href="#about" className={activeSection === 'about' ? 'active' : ''}>
        about
      </a>
      <a
        href="#education"
        className={activeSection === 'education' ? 'active' : ''}
      >
        education
      </a>
      <a
        href="#experience"
        className={activeSection === 'experience' ? 'active' : ''}
      >
        experience
      </a>
      <a
        href="#projects"
        className={activeSection === 'projects' ? 'active' : ''}
      >
        projects
      </a>
      <img src={theme} onClick={changeTheme} />
    </nav>
  );
};

export default NavBar;
