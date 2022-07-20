import { UserState } from "../store";

import { UserService } from "../services/UserService";

export class UserManager {
  static getAll = async () => {
    const users = await UserService.getAll();
    if (!users) return;
    UserState.users = users;
  };
}
