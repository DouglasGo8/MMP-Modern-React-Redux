import { StrictMode } from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import "./index.css";

import App from "./App";
import reducers from "./reducers";

render(
  <Provider store={createStore(reducers)}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>,
  document.getElementById("root")
);
