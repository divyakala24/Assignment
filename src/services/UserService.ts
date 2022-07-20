import api from "./JsonPlace";
import { User } from "../models";
import { Post } from "../models";
export class UserService {
  static getAll = async () => {
    const response = await api.get<User[]>("/users");
    return response.data;
  };

  static userById = async (id: number) => {
    const response = await api
      .get<Post[]>(`posts?userId=${id}`)
      .catch(() => null);
    if (!response) return;
    return response.data;
  };
}
