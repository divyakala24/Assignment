import api from "./JsonPlace";

import { Post } from "../models";

export class PostService {
  static getAll = async () => {
    const response = await api.get<Post[]>("/posts").catch(() => null);
    if (!response) return null;
    return response.data;
  };
}

// export class PostService {
//   static getAll = async (userId: number | undefined) => {
//     const response = await api
//       .get<Post[]>("/posts", { params: { userId } })
//       .catch(() => null);
//     if (!response) return null;
//     return response.data;
//   };
// }
