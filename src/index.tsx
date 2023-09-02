import "./index.css";

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import customStore, { StateType } from "./redux/customStore";
import { RootReducerType, store } from "./redux/redux-store";

export const render = (state: RootReducerType) => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={state} dispatch={customStore.dispatch.bind(customStore)} />
    </BrowserRouter>,
    document.getElementById("rooше")
  );
};

render(customStore.getState());

customStore.subscribe(render);
