import { ThemeProvider } from "styled-components";
import { Container } from "./components/Container/Container";
import { GlobalStyles } from "./components/GlobalStyles/Global";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

const theme = {
  colors: {
    primary: {
      strongCyan: "hsl(172, 67%, 45%)",
      inverted: "hsl(14, 59%, 63%)",
    },
    neutral: {
      veryDarkCyan: "hsl(183, 100%, 15%)",
      darkGrayishCyan: "hsl(186, 14%, 43%)",
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
        <Container>
          <Header />
          <Main />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
