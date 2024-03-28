import { createContext, useState } from "react";

export const ThemeContext = createContext();

export function ThemeContextProvider({ children }) {
  const [ThemeState, setThemeState] = useState("lightMode");

  // Function to handle the theme change.
  const toggleTheme = (e) => {
    if (ThemeState === "darkMode") {
      setThemeState("lightMode");
      document.documentElement.style.setProperty("--bg_body", " #f0f9ff");
    } else {
      setThemeState("darkMode");
      document.documentElement.style.setProperty("--bg_body", " #282828");
    }
  };
  return (
    <ThemeContext.Provider value={{ ThemeState, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
