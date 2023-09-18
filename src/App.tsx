import React from "react";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import NavBar from "./components/NavBar/NavBar";
import { Dialogs } from "./components/Dialogs/Dialogs";
import { Route } from "react-router-dom";
import { News } from "./components/News/News";
import { ActionsType, StateType, CustomStoreType } from "./redux/customStore";
import { DialogsContainer } from "./components/Dialogs/DialogsContainer";

type AppPropsType = {
  state: StateType;
  dispatch: (action: ActionsType) => void;
  customStore: CustomStoreType;
};

const App: React.FC<AppPropsType> = (props) => {
  const { state, dispatch, customStore } = props;

  return (
    <div className="content">
      <Header />
      <NavBar />

      <div className={"content__main"}>
        <Route
          path="/profile"
          render={() => <Main customStore={customStore} />}
        />
        <Route
          path="/dialogs"
          render={() => <DialogsContainer customStore={customStore} />}
        />
        <Route path="/news" render={() => <News />} />
      </div>
    </div>
  );
};

export default App;
