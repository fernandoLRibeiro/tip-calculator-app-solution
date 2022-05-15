import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/GlobalStyles/Global";

const theme = {
  colors: {
    primary: {
      strongCyan: "hsl(172, 67%, 45%)",
    },
    neutral: {
      veryDarkCyan: "hsl(183, 100%, 15%)",
      darkGrayisCyan: "hsl(186, 14%, 43%)",
      grayishCyan: "hsl(184, 14%, 56%)",
      lightGrayishCyan: "hsl(185, 41%, 84%)",
      veryLightGrayishCyan: "hsl(189, 41%, 97%)",
      white: "hsl(0, 0%, 100%)",
    },
  },
};

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
      </ThemeProvider>
    </>
  );
}

export default App;
