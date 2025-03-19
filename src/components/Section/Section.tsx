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
        <h1 className="fixed">hi i&apos;m</h1>
        <h1>
          <span style={{ opacity: 0 }}>hi i&apos;m </span>
          {props.title}.
        </h1>
      </div>
      <div className="bottom-half">
        <div className="content">{props.content}</div>
      </div>
    </section>
  );
};

export default Section;
