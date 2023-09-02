import React from "react";
import style from "./Post.module.css";
import avatar from "../../images/avatar.png";

type PostProps = {
  like: number;
  message: string;
};

const Post: React.FC<PostProps> = ({ like, message }) => {
  return (
    <div className={style.post}>
      <img src={avatar} alt="imgPost" />
      <p>{message}</p>
      <div>
        <p>Like: {like}</p>
      </div>
    </div>
  );
};

export default Post;
