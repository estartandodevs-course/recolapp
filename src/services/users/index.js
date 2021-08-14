import { users } from "../../mock/users";

export const getUser = (email) => {
  const response = users.filter((user) => user.email === email);
  return response;
};
