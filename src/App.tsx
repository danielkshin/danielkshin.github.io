import { ReactElement } from 'react';
import { Section } from 'components';
import './App.css';

interface Section {
  title: string;
  content: ReactElement;
}

const App = () => {
  const sections: Section[] = [
    {
      title: 'daniel',
      content: <p>test</p>,
    },
    {
      title: 'a cs major',
      content: (
        <div className="content">
          <p>
            I am a freshman studying computer science at the Paul G. Allen
            School of Computer Science and Engineering at the University of
            Washington.
          </p>
        </div>
      ),
    },
    {
      title: 'an intern',
      content: (
        <div className="content">
          <p>I am an incoming SDE intern at Amazon for the summer of 2025.</p>
        </div>
      ),
    },
    {
      title: 'a programmer',
      content: (
        <div className="content">
          <p>test</p>
        </div>
      ),
    },
  ];

  const renderSections = (sections: Section[]) => {
    const sectionElements = [];

    for (const section of sections) {
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

  return <div>{renderSections(sections)}</div>;
};

export default App;
