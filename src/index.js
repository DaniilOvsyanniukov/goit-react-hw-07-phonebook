import React from "react";
import "modern-normalize/modern-normalize.css";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import "./index.css";
import expotStore from "./redux/store";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={expotStore.store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
