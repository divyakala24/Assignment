import React, { useEffect } from "react";
import { useSnapshot } from "valtio";
import { UserManager } from "../manager/UserManager";
import { UserState } from "../store";
import UserDetails from "./UserDetails";
import { PostState } from "../store";
import { PostManager } from "../manager/PostManager";
import { User } from "../models";
import PostItem from "./PostItem";

const PostList = () => {
  const { posts } = useSnapshot(PostState);
  const loadPost = async () => {
    await PostManager.getAll();
  };

  useEffect(() => {
    loadPost();
  }, []);

  return (
    <div>
      {posts.map((e) => (
        <PostItem post={e} />
      ))}
    </div>
  );
};

export default PostList;
