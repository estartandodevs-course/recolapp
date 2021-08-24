import { getById } from "./firebase/handlers";

export const getUserById = () => {
  getById("users");
};
