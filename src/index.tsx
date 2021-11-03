import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "components/App";
import { store } from "state";
import { GlobalStyles, ThemeProvider } from "style";
import { GameContextProvider } from "contexts/GameContext";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GameContextProvider>
        <ThemeProvider>
          <GlobalStyles />
          <App />
        </ThemeProvider>
      </GameContextProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
