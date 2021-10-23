import React from "react";
import ReactDOM from "react-dom";
import App from "components/App";
import { GlobalStyles, ThemeProvider } from "style";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
