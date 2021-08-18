import { users } from "../../mock/users";

export const auth = (email, password) => {
  const response = users.filter((user) => user.email === email)[0];

  if (response?.password === password) {
    return {
      auth: true,
      user: response,
    };
  }

  return { auth: false };
};
