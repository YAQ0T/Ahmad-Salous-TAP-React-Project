import { createContext, useState } from "react";

export const ThemeContext = createContext();

export function ThemeContextProvider({ children }) {
  const [ThemeState, setThemeState] = useState("lightMode");

  // Function to handle the theme change.
  const toggleTheme = (e) => {
    if (ThemeState === "darkMode") {
      setThemeState("lightMode");
    } else {
      setThemeState("darkMode");
    }
  };
  return (
    <ThemeContext.Provider value={{ ThemeState, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
