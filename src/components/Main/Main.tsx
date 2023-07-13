import React from "react";

import style from "./Main.module.css";
import AllPosts, { PostDataType } from "../AllPosts/AllPosts";
import { MainInfo } from "./MainInfo/MainInfo";

type MainPropsType = {
  postData: PostDataType[];
};

const Main: React.FC<MainPropsType> = (props) => {
  const { postData } = props;

  return (
    <div className={style.mainContent}>
      <MainInfo />
      <AllPosts postData={postData} />
    </div>
  );
};

export default Main;
