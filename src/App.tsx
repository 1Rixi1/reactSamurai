import React from "react";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import NavBar from "./components/NavBar/NavBar";
import { Route } from "react-router-dom";
import { News } from "./components/News/News";
import { DialogsContainer } from "./components/Dialogs/DialogsContainer";

type AppPropsType = {};

const App: React.FC<AppPropsType> = (props) => {
  return (
    <div className="content">
      <Header />
      <NavBar />

      <div className={"content__main"}>
        <Route path="/profile" render={() => <Main />} />
        <Route path="/dialogs" render={() => <DialogsContainer />} />
        <Route path="/news" render={() => <News />} />
      </div>
    </div>
  );
};

export default App;
