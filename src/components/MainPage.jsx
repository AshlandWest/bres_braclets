import React from "react";
import postData from "../data/postData";
import Post from "./Post";
import MainPosts from "./MainPosts";
import Pagination from "./Pagination";

const MainPage = ({ postData }) => {
  return (
    <>
      <MainPosts postData={postData} />
      <Pagination />
    </>
  );
};

export default MainPage;
