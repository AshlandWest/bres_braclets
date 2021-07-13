import React from "react";
import PostHead from "./PostHead";
import PostImage from "./PostImage";
import PostText from "./PostText";
import PostFooter from "./PostFooter";

function Post(props) {
  return (
    <article class="post">
      <PostHead
        title={props.title}
        description={props.description}
        date={props.date}
        author={props.author}
      />
      <PostImage />
      <PostText />
      <PostFooter />
    </article>
  );
}

export default Post;
