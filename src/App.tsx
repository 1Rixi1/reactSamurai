import React from "react";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import NavBar from "./components/NavBar/NavBar";
import { Dialogs } from "./components/Dialogs/Dialogs";
import { Route } from "react-router-dom";
import { News } from "./components/News/News";
import { ActionsType, StateType } from "./redux/customStore";
import { RootReducerType } from "./redux/redux-store";
import { Store } from "redux";

type AppPropsType = {
  state: StateType;
  dispatch: (action: ActionsType) => void;
};

const App: React.FC<AppPropsType> = (props) => {
  const { state, dispatch } = props;

  return (
    <div className="content">
      <Header />
      <NavBar />

      <div className={"content__main"}>
        <Route
          path="/profile"
          render={() => (
            <Main profilePage={state.profilePage} dispatch={dispatch} />
          )}
        />
        <Route
          path="/dialogs"
          render={() => (
            <Dialogs dialogsPage={state.dialogsPage} dispatch={dispatch} />
          )}
        />
        <Route path="/news" render={() => <News />} />
      </div>
    </div>
  );
};

export default App;
