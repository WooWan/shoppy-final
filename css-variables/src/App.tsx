import { useState } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./styles/theme";

type ThemeTypes = "light" | "dark";

const GlobalStyle = createGlobalStyle`
  body {
    background-color:${(props) => props.theme.background};
  }
`;

function App() {
  const [theme, setTheme] = useState<ThemeTypes>("light");
  const [isDarkMode, setIsDarkMode] = useState(false);

  function toggleTheme() {
    setIsDarkMode((prev) => !prev);
  }

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <button onClick={toggleTheme}>Toggle Theme</button>
      <div className="App"></div>
    </ThemeProvider>
  );
}

export default App;
