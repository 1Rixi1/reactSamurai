import "./index.css";

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import customStore from "./redux/customStore";
import { RootReducerType, store } from "./redux/redux-store";
import { Provider } from "react-redux";

export const render = (state: RootReducerType) => {
  ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>,

    document.getElementById("root")
  );
};

render(customStore.getState());

customStore.subscribe(render);
