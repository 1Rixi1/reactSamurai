import "./index.css";

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import customStore from "./redux/customStore";
import { RootReducerType } from "./redux/redux-store";

export const render = (state: RootReducerType) => {
  ReactDOM.render(
    <BrowserRouter>
      <App
        customStore={customStore}
        state={state}
        dispatch={customStore.dispatch.bind(customStore)}
      />
    </BrowserRouter>,
    document.getElementById("root")
  );
};

render(customStore.getState());

customStore.subscribe(render);
