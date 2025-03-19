import { ReactElement, useEffect, useRef, useState } from 'react';
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
const sectionNames = sections.map((section) => section.id);

const App = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState('about');
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    const updateScrollPosition = () => {
      setScrollPosition(container.scrollTop);
    };

    container.addEventListener('scroll', updateScrollPosition);

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

    return () => {
      container.removeEventListener('scroll', updateScrollPosition);
    };
  }, [activeSection, scrollPosition]);

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

  return (
    <div
      className={`container ${activeSection}`}
      id="container"
      ref={containerRef}
    >
      {renderSections(sections)}
    </div>
  );
};

export default App;
