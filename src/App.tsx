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

    if (!container || !config[currentSection]) return;

    const handleScroll = () => {
      const sections = [...container.children];
      const visibleSection = sections.find((section) => {
        const rect = section.getBoundingClientRect();
        return (
          rect.top <= window.innerHeight / 2 &&
          rect.bottom >= window.innerHeight / 2
        );
      });

      if (!visibleSection) return;

      const newSection = sections.indexOf(visibleSection);

      if (newSection === currentSection) return;

      setCurrentSection(newSection);
    };

    container.addEventListener('scroll', handleScroll);

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

    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, [currentSection, config]);

  const renderSections = (config: SectionDetails[]) => {
    const sectionElements = [];

    for (const section of config) {
      sectionElements.push(
        <Section
          key={section.title}
          title={section.title}
          content={section.content}
        />
      );
    }

    return sectionElements;
  };

  return (
    <div className="container" ref={containerRef}>
      {renderSections(config)}
    </div>
  );
};

export default App;
