import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "components/App";
import { store } from "state";
import { GlobalStyles, ThemeProvider } from "style";
import { GameContextProvider } from "contexts/GameContext";
import { ToastStackContextProvider } from "contexts/ToastStackContext";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GameContextProvider>
        <ToastStackContextProvider>
          <ThemeProvider>
            <GlobalStyles />
            <App />
          </ThemeProvider>
        </ToastStackContextProvider>
      </GameContextProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
