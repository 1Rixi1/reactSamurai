import Post from "../Post/Post";
import React, { ChangeEvent } from "react";
import { ActionsType, ProfilePageType } from "../../redux/customStore";
import { addNewPostAC, addPostAC } from "../../redux/reducers/profile-reducer";

type AllPostsPropsType = {
  profilePage: ProfilePageType;
  dispatch: (action: ActionsType) => void;
};

const AllPosts: React.FC<AllPostsPropsType> = (props) => {
  const { profilePage, dispatch } = props;

  const mappedPosts = profilePage.postData.map((post) => {
    return <Post key={post.id} like={post.likeCount} message={post.message} />;
  });

  const onClickAddPostHandler = () => {
    dispatch(addPostAC(profilePage.postText));
  };
  const onChangeTextAreaHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(addNewPostAC(e.currentTarget.value));
  };

  return (
    <div>
      <div>
        <textarea
          value={profilePage.postText}
          onChange={onChangeTextAreaHandler}
        />
        <div>
          <button onClick={onClickAddPostHandler}>Add Post</button>
        </div>
      </div>

      <h1>My Posts</h1>
      {mappedPosts}
    </div>
  );
};

export default AllPosts;
