import { useEffect } from 'react';
import useLocalStorage from 'use-local-storage';
import './App.css';
import {
  NavBar,
  About,
  Education,
  Experience,
  Projects,
  Footer,
} from 'components';

const App = () => {
  const [dark, setDark] = useLocalStorage('dark', false);

  useEffect(() => {
    document.documentElement.style.setProperty(
      'color-scheme',
      dark ? 'dark' : 'light'
    );
  }, [dark]);

  return (
    <div className="App" data-theme={dark ? 'dark' : 'light'}>
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
