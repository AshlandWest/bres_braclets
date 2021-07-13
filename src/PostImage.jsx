import react from "react";

function PostImage(props) {
  return (
    <a href="single.html" class="image featured">
      <img src={props.image} alt="" width={381} />
    </a>
  );
}

export default PostImage;
