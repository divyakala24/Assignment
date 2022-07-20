import React from "react";
import { User } from "../models";
import { UserManager } from "../manager/UserManager";
import { PostManager } from "../manager/PostManager";
import { useSnapshot } from "valtio";
import { UserState } from "../store";

interface UserItemProps {
  user: User;
}
const UserItem = ({ user }: UserItemProps) => {
  const { selectedUser } = useSnapshot(UserState);
  const isSelectedUser = selectedUser?.id === user.id;

  return (
    <div>
      <ul>{user.name}</ul>
    </div>
  );
};

export default UserItem;
