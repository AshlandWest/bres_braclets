import react from "react";

function PostImage(props) {
  return (
    <a href="single.html" class="image featured">
      <img src={props.image} alt="" />
    </a>
  );
}

export default PostImage;
