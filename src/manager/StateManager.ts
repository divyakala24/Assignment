import { PostState } from "./../store/index";

import { Post, User } from "../models";
import { UserState } from "../store";

export class StateManager {
  static setUsers = (UserList: User[]) => {
    UserState.users = UserList;
  };
}

export class StateManagerPost {
  static setPost = (PostList: Post[]) => {
    PostState.posts = PostList;
  };
}
