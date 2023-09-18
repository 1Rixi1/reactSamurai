import React from "react";
import { addNewPostAC, addPostAC } from "../../redux/reducers/profile-reducer";
import AllPosts from "./AllPosts";
import { StoreContext } from "../../Context/StoreContext";

type AllPostsPropsType = {};

const AllPostsContainer: React.FC<AllPostsPropsType> = (props) => {
  return (
    <StoreContext.Consumer>
      {(customStore) => {
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
      }}
    </StoreContext.Consumer>
  );
};

export default AllPostsContainer;
