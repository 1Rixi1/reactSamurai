import React from "react";

import style from "./Main.module.css";
import AllPosts from "../AllPosts/AllPosts";
import { MainInfo } from "./MainInfo/MainInfo";
import { ActionsType, ProfilePageType } from "../../redux/customStore";

type MainPropsType = {
  profilePage: ProfilePageType;
  dispatch: (action: ActionsType) => void;
};

const Main: React.FC<MainPropsType> = (props) => {
  const { profilePage, dispatch } = props;

  return (
    <div className={style.mainContent}>
      <MainInfo />
      <AllPosts profilePage={profilePage} dispatch={dispatch} />
    </div>
  );
};

export default Main;
