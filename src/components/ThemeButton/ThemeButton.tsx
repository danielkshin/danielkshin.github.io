import { useEffect } from 'react';
import './ThemeButton.css';
import themeIcon from 'assets/themeIcon.png';

interface ThemeButtonProps {
  dark: boolean;
  setDark: (error: boolean) => void;
}

const ThemeButton = ({ dark, setDark }: ThemeButtonProps) => {
  useEffect(() => {
    document.documentElement.style.setProperty(
      'color-scheme',
      dark ? 'dark' : 'light'
    );
  }, [dark]);

  return (
    <div className="theme">
      <img
        src={themeIcon}
        alt="Theme icon"
        onClick={() => {
          setDark(!dark);
        }}
      />
    </div>
  );
};

export default ThemeButton;
