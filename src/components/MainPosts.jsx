import React from "react";
import Post from "./Post";

const MainPosts = ({ postData }) => {
  const posts = postData.posts.map((post) => <Post {...post} />);
  return posts;
};

export default MainPosts;
