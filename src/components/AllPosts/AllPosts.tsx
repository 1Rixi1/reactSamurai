import Post from "../Post/Post";
import React from "react";

export type PostDataType = {
  id: number;
  likeCount: number;
};

type AllPostsPropsType = {
  postData: PostDataType[];
};

const AllPosts: React.FC<AllPostsPropsType> = (props) => {
  const { postData } = props;

  const mappedPosts = postData.map((post) => (
    <Post key={post.id} like={post.likeCount} />
  ));

  return (
    <div>
      <div>
        <textarea></textarea>
        <div>
          <button>Add Post</button>
        </div>
      </div>

      <h1>My Posts</h1>
      {mappedPosts}
    </div>
  );
};

export default AllPosts;
