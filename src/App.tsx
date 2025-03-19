import { ReactElement, useEffect, useRef } from 'react';
import { Section } from 'components';
import './App.css';

interface Section {
  title: string;
  content: ReactElement;
  id: string;
  backgroundColor: string;
  textColor: string;
  titleColor: string;
}

const sections: Section[] = [
  {
    title: 'daniel',
    content: <p>test</p>,
    id: 'about',
    backgroundColor: '#f2f2f2',
    textColor: '#121212',
    titleColor: '#5aa57b',
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
    backgroundColor: '#4b2e83',
    textColor: '#f2f2f2',
    titleColor: '#b7a57a',
  },
  {
    title: 'an intern',
    content: (
      <p>I am an incoming SDE intern at Amazon for the summer of 2025.</p>
    ),
    id: 'experience',
    backgroundColor: '#232f3e',
    textColor: '#ff9900',
    titleColor: '#f2f2f2',
  },
  {
    title: 'a dev',
    content: <p>test</p>,
    id: 'projects',
    backgroundColor: '#ff0000',
    textColor: '#121212',
    titleColor: '#33dd33',
  },
];

const App = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const currentSectionRef = useRef<number>(-1);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    const handleScroll = () => {
      const newSection = Math.floor(container.scrollTop / window.innerHeight);

      if (newSection === currentSectionRef.current) return;

      currentSectionRef.current = newSection;
      container.style.setProperty(
        '--bg-color',
        sections[newSection].backgroundColor
      );
      container.style.setProperty(
        '--text-color',
        sections[newSection].textColor
      );
      container.style.setProperty(
        '--title-color',
        sections[newSection].titleColor
      );
    };

    container.addEventListener('scroll', handleScroll);

    handleScroll();

    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
    <div className="container" id="container" ref={containerRef}>
      {renderSections(sections)}
    </div>
  );
};

export default App;
