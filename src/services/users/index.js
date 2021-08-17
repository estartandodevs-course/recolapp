/* eslint-disable */

import { users } from "../../mock/users";

export const getUser = (user_id) => {
  const response = users.find((user) => user.id === user_id);
  return response;
};
