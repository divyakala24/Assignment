import { User } from "./../models/index";
import { Post } from "./../models/index";

import { proxy } from "valtio";

interface UserStateType {
  users: User[];
  selectedUser?: User;
}

interface PostStateType {
  posts: Post[];
}

export const UserState = proxy<UserStateType>({
  users: [],
  selectedUser: undefined,
});

export const PostState = proxy<PostStateType>({
  posts: [],
});
