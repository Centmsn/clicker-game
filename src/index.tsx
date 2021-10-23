import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "components/App";
import { store } from "state";
import { GlobalStyles, ThemeProvider } from "style";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <GlobalStyles />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
