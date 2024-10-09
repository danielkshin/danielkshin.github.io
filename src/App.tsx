import { useState } from 'react';
import './App.css';
import NavBar from './NavBar';
import About from './About';
import Education from './Education';
import Experience from './Experience';
import Projects from './Projects';
import Footer from './Footer';

const App = () => {
  const [dark, setDark] = useState(localStorage.getItem('dark') === 'true');

  return (
    <div className={`App${dark ? ' dark' : ''}`}>
      <NavBar dark={dark} setDark={setDark} />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
};

export default App;