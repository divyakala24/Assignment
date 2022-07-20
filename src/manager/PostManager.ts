import { PostState } from "./../store/index";
import { UserState } from "./../store/index";
import { User } from "../models";
import { PostService } from "../services/PostService";
import { UserService } from "../services/UserService";

export class PostManager {
  static getAll = async () => {
    const posts = await PostService.getAll();
    if (!posts) return;
    PostState.posts = posts;
  };
  static postById = async (user: User) => {
    const postId = await UserService.userById(user.id);
    if (!postId) return;
    UserState.selectedUser = user;
    PostState.posts = postId;
  };
}
