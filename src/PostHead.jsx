import React from "react";

function PostHead(props) {
  const date = `${props.date.toLocaleString("default", { month: "long" })}
  ${props.date.getDate()},
  ${props.date.getFullYear()}`;
  return (
    <header>
      <div class="title">
        <h2>
          <a href="single.html">{props.title}</a>
        </h2>
        <p>{props.description}</p>
      </div>
      <div class="meta">
        <time class="published" datetime="2015-11-01">
          {date}
        </time>
        <a href="#" class="author">
          <span class="name">{props.author.name}</span>
          <img src={props.author.avitar} alt="" />
        </a>
      </div>
    </header>
  );
}

export default PostHead;
