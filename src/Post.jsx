import React from "react";
import PostHead from "./PostHead";
import PostImage from "./PostImage";
import PostText from "./PostText";
import PostFooter from "./PostFooter";

function Post() {
  return (
    <article class="post">
      <PostHead />
      <PostImage />
      <PostText />
      <PostFooter />
    </article>
  );
}

export default Post;
