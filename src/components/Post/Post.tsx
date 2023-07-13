import React from "react";
import style from "./Post.module.css";
import avatar from "../../images/avatar.png";

type PostProps = {
  like: number;
};

const Post: React.FC<PostProps> = ({ like }) => {
  return (
    <div className={style.post}>
      <img src={avatar} alt="imgPost" />
      <p>text post</p>
      <div>
        <p>Like: {like}</p>
      </div>
    </div>
  );
};

export default Post;
