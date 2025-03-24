import { useEffect, useRef, useState } from 'react';
import { Section } from 'components';
import useConfig, { SectionDetails } from 'Config';
import './App.css';

const App = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentSection, setCurrentSection] = useState(0);
  const config = useConfig();

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    const handleScroll = () => {
      const newSection = Math.round(container.scrollTop / window.innerHeight);

      if (newSection === currentSection) return;

      setCurrentSection(newSection);
    };

    container.addEventListener('scroll', handleScroll);

    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, [currentSection, config]);

  useEffect(() => {
    if (config[currentSection]) {
      document.body.style.setProperty(
        '--bg-color',
        config[currentSection].backgroundColor
      );
      document.body.style.setProperty(
        '--text-color',
        config[currentSection].textColor
      );
      document.body.style.setProperty(
        '--title-color',
        config[currentSection].titleColor
      );
    }
  }, [currentSection, config]);

  const renderSections = (config: SectionDetails[]) => {
    const sectionElements = [];

    for (const section of config) {
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
      {renderSections(config)}
    </div>
  );
};

export default App;
