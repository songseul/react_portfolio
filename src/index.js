import React from "react";
import ReactDOM from "react-dom/client";

import GlobalStyle from "./style/globalStyle";
import App from "./App";
import { ThemeProvider } from "styled-components";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider
    theme={{
      fg: "palevioletred",
      bg: "white",
    }}
  >
    <GlobalStyle />
    <App />
  </ThemeProvider>
);
