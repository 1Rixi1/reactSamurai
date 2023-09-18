import React from "react";

import style from "./Main.module.css";
import { MainInfo } from "./MainInfo/MainInfo";
import { CustomStoreType } from "../../redux/customStore";
import AllPostsContainer from "../AllPosts/AllPostsContainer";

type MainPropsType = {
  customStore: CustomStoreType;
};

const Main: React.FC<MainPropsType> = (props) => {
  const { customStore } = props;

  return (
    <div className={style.mainContent}>
      <MainInfo />
      <AllPostsContainer customStore={customStore} />
    </div>
  );
};

export default Main;
