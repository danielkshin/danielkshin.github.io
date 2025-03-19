import { ReactElement } from 'react';
import './Section.css';

interface SectionProps {
  title: string;
  content: ReactElement;
}

const Section = (props: SectionProps) => {
  return (
    <section>
      <div className="top-half">
        <h1>hi i&apos;m {props.title}</h1>
      </div>
      <div className="bottom-half">{props.content}</div>
    </section>
  );
};

export default Section;
