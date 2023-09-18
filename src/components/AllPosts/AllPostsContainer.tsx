import React from "react";
import { CustomStoreType } from "../../redux/customStore";
import { addNewPostAC, addPostAC } from "../../redux/reducers/profile-reducer";
import AllPosts from "./AllPosts";

type AllPostsPropsType = {
  customStore: CustomStoreType;
};

const AllPostsContainer: React.FC<AllPostsPropsType> = (props) => {
  const { customStore } = props;

  const profilePage = customStore.getState().profilePage;

  const onChangeTextArea = (text: string) => {
    customStore.dispatch(addNewPostAC(text));
  };

  const onClickAddPost = () => {
    customStore.dispatch(addPostAC(profilePage.postText));
  };

  return (
    <AllPosts
      profilePage={profilePage}
      onClickAddPost={onClickAddPost}
      onChangeTextArea={onChangeTextArea}
    />
  );
};

export default AllPostsContainer;
