import { users } from "../../mock/users";

export const auth = (email, password) => {
  const response = users.find((user) => user.email === email);

  if (response?.password === password) {
    return {
      auth: true,
      user: response,
    };
  }

  return { auth: false };
};

export const signOut = (history, setUser) => {
  setUser({});
  localStorage.clear();
  history.push("/");
  return 1;
};
