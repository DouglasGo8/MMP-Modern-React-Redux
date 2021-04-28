import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import reducers from "./components/reducers";

import "./index.css";

import App from "./App";

const store = createStore(reducers);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
