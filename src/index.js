import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import cartReducer from "./reducers/CartReducer";
import { Provider } from "react-redux";
import { createStore } from "redux";

const rootElement = document.getElementById("root");
const store = createStore(cartReducer);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
