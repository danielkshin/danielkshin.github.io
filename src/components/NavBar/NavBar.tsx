import { useState, useEffect } from 'react';
import './NavBar.css';
import { ThemeButton } from 'components';

interface NavBarProps {
  dark: boolean;
  setDark: (error: boolean) => void;
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
      <ThemeButton dark={dark} setDark={setDark} />
    </nav>
  );
};

export default NavBar;
