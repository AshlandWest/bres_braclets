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
      <PostImage image={props.mainImage} />
      <PostText text={props.postText} />
      <PostFooter
        catagory={props.postCatagory}
        likes={props.likes}
        comments={props.comments}
      />
    </article>
  );
}

export default Post;
