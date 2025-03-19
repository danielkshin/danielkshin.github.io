import { ReactElement, useEffect, useState } from 'react';
import { Section } from 'components';
import './App.css';

interface Section {
  title: string;
  content: ReactElement;
  id: string;
}

const sections: Section[] = [
  {
    title: 'daniel',
    content: <p>test</p>,
    id: 'about',
  },
  {
    title: 'a student',
    content: (
      <p>
        I am a freshman studying computer science at the Paul G. Allen School of
        Computer Science and Engineering at the University of Washington.
      </p>
    ),
    id: 'education',
  },
  {
    title: 'an intern',
    content: (
      <p>I am an incoming SDE intern at Amazon for the summer of 2025.</p>
    ),
    id: 'experience',
  },
  {
    title: 'a dev',
    content: <p>test</p>,
    id: 'projects',
  },
];

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

const App = () => {
  const scrollPosition = useScrollPosition();
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const sectionNames = sections.map((section) => section.id);

    sectionNames.forEach((section) => {
      const sectionElement = document.getElementById(section);
      if (!sectionElement) return;

      if (
        scrollPosition >= sectionElement.offsetTop &&
        scrollPosition <
          sectionElement.offsetTop + sectionElement.offsetHeight &&
        section !== activeSection
      ) {
        setActiveSection(section);
      }
    });
  }, [scrollPosition, activeSection]);

  const renderSections = (sections: Section[]) => {
    const sectionElements = [];

    for (const section of sections) {
      sectionElements.push(
        <Section
          key={section.title}
          title={section.title}
          content={section.content}
          id={section.id}
        />
      );
    }

    return sectionElements;
  };

  return <div className={activeSection}>{renderSections(sections)}</div>;
};

export default App;
