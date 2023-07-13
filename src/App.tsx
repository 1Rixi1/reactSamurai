import React from "react";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import NavBar from "./components/NavBar/NavBar";
import { Dialogs } from "./components/Dialogs/Dialogs";
import { Route } from "react-router-dom";
import { News } from "./components/News/News";
import { StateType } from "./Redux/state";

type AppPropsType = {
  state: StateType;
};

const App: React.FC<AppPropsType> = (props) => {
  const { state } = props;

  return (
    <div className="content">
      <Header />
      <NavBar />

      <div className={"content__main"}>
        <Route
          path="/profile"
          render={() => <Main postData={state.profilePage.postData} />}
        />
        <Route
          path="/dialogs"
          render={() => <Dialogs dataItemsMessage={state.dialogsPage} />}
        />
        <Route path="/news" render={() => <News />} />
      </div>
    </div>
  );
};

export default App;
