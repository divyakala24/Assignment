import React, { useEffect } from "react";
import { useSnapshot } from "valtio";
import { UserManager } from "../manager/UserManager";
import { UserState } from "../store";
import UserDetails from "./UserDetails";
import { PostManager } from "../manager/PostManager";
import { User } from "../models";
import UserItem from "./UserItem";

const UserList = () => {
  const { users } = useSnapshot(UserState);
  const loadPost = async () => {
    await UserManager.getAll();
  };

  const userData = async (user: User) => {
    await PostManager.postById(user);
    console.log("calling");
  };

  useEffect(() => {
    loadPost();
  }, []);
  return (
    <div>
      {users.map((user: User) => (
        <div onClick={() => userData(user)}>
          <UserItem user={user} />
        </div>
      ))}
    </div>
  );
};

export default UserList;
