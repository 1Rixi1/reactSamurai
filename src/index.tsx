import "./index.css";

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import customStore from "./redux/customStore";
import { RootReducerType } from "./redux/redux-store";
import { StoreContext } from "./Context/StoreContext";

export const render = (state: RootReducerType) => {
  ReactDOM.render(
    <BrowserRouter>
      <StoreContext.Provider value={customStore}>
        <App />
      </StoreContext.Provider>
    </BrowserRouter>,

    document.getElementById("root")
  );
};

render(customStore.getState());

customStore.subscribe(render);
