import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Router } from "./Router";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
        {/** Adicionar contextAPI aqui para os valores do carinho */}
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  );
}