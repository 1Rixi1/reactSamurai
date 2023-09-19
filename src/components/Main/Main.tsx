import React from "react";

import style from "./Main.module.css";
import { MainInfo } from "./MainInfo/MainInfo";
import { AllPostsContainer } from "../AllPosts/AllPostsContainer";

type MainPropsType = {};

const Main: React.FC<MainPropsType> = (props) => {
  return (
    <div className={style.mainContent}>
      <MainInfo />
      <AllPostsContainer />
    </div>
  );
};

export default Main;
