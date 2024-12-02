import { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { theme } from './assets/';

interface NavBarProps {
  dark: boolean;
  setDark: Dispatch<SetStateAction<boolean>>;
}

const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const updateScrollPosition = () => {
      setScrollPosition(Math.ceil(window.scrollY));
    };

    updateScrollPosition();

    window.addEventListener('scroll', updateScrollPosition);

    return () => {
      window.removeEventListener('scroll', updateScrollPosition);
    };
  }, []);

  return scrollPosition;
};

const NavBar = ({ dark, setDark }: NavBarProps) => {
  const scrollPosition = useScrollPosition();
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const sections = ['about', 'education', 'experience', 'projects'];

    sections.forEach((section) => {
      const sectionElement = document.getElementById(section);
      if (!sectionElement) return;

      if (
        scrollPosition >= sectionElement.offsetTop &&
        scrollPosition < sectionElement.offsetTop + sectionElement.offsetHeight
      ) {
        setActiveSection(section);
      }
    });
  }, [scrollPosition]);

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
