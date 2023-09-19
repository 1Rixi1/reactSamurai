import Post from "../Post/Post";
import React, { ChangeEvent } from "react";
import { ProfilePageType } from "../../redux/customStore";

type AllPostsPropsType = {
  profilePage: ProfilePageType;
  onClickAddPost: (postText: string) => void;
  onChangeTextArea: (text: string) => void;
};

const AllPosts: React.FC<AllPostsPropsType> = (props) => {
  const { profilePage, onClickAddPost, onChangeTextArea } = props;
  const mappedPosts = profilePage.postData.map((post) => {
    return <Post key={post.id} like={post.likeCount} message={post.message} />;
  });

  const onChangeTextAreaHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    debugger;
    onChangeTextArea(e.currentTarget.value);
  };

  const onClickAddPostHandler = () => {
    onClickAddPost(profilePage.postText);
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
