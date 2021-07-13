import React from "react";

function PostFooter(props) {
  return (
    <footer>
      <ul class="actions">
        <li>
          <a href="single.html" class="button large">
            Continue Reading
          </a>
        </li>
      </ul>
      <ul class="stats">
        <li>
          <a href="#">{props.catagory}</a>
        </li>
        <li>
          <a href="#" class="icon solid fa-heart">
            {props.likes}
          </a>
        </li>
        <li>
          <a href="#" class="icon solid fa-comment">
            {props.comments.numberOfComments}
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default PostFooter;
