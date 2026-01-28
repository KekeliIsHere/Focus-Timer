import { useState, createContext, useContext } from 'react'
import Timer from './Timer.jsx'

const ThemeContext = createContext();

function App(){
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <div className={isDark ? 'dark-mode' : 'light-mode'}>
        <button onClick={toggleTheme} className="theme-toggle">
          {isDark ? <img src='./src/icons/light-on.png' alt="Light Mode" className="theme-icon" /> : <img src='./src/icons/light-off.png' alt="Light Mode" className="theme-icon" />}
        </button>
        <h1>Focus Timer</h1>
        <Timer />
      </div>
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
export default App;
