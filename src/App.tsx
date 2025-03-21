import { useEffect, useRef } from 'react';
import { Section } from 'components';
import useConfig, { SectionDetails } from 'Config';
import './App.css';

const App = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const currentSectionRef = useRef<number>(-1);
  const config = useConfig();

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    const handleScroll = () => {
      const newSection = Math.round(container.scrollTop / window.innerHeight);

      if (newSection === currentSectionRef.current) return;

      currentSectionRef.current = newSection;
      document.body.style.setProperty(
        '--bg-color',
        config[newSection].backgroundColor
      );
      document.body.style.setProperty(
        '--text-color',
        config[newSection].textColor
      );
      document.body.style.setProperty(
        '--title-color',
        config[newSection].titleColor
      );
    };

    container.addEventListener('scroll', handleScroll);

    handleScroll();

    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, [config]);

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
