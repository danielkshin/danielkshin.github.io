import { ReactElement } from 'react';
import './Section.css';

interface SectionProps {
  title: string;
  content: ReactElement;
  id: string;
}

const Section = (props: SectionProps) => {
  return (
    <section id={props.id}>
      <div className="top-half">
        <h1 className="fixed-text">hi i&apos;m</h1>
        <h1>
          <span className="hidden-text">hi i&apos;m </span>
          <span className="title-text">{props.title}</span>.
        </h1>
      </div>
      <div className="bottom-half">
        <div className="content">{props.content}</div>
      </div>
    </section>
  );
};

export default Section;
