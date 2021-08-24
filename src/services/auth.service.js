import { users } from "../mock/users";
import {
  emailProviderLogin,
  emailProviderRegister,
} from "./firebase/authEmail";
import { getById, save, update } from "./firebase/handlers";
import { firebaseAuth } from "./firebase/config";

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
  firebaseAuth.signOut();

  setUser({});
  localStorage.clear();
  history.push("/");
  location.reload();
};

// vai ralar
export const getUser = (user_id) => {
  const response = users.find((user) => user.id === user_id);
  return response;
};

// ___________________________________

const basePath = "#21/recolapp";

export const registerWithEmailAndPassword = async (
  credentials, // { email, password, name }
  profileType, // "empreedor" || "coletor"
  profileData // { ... }
) => {
  const { user, idToken, isNewUser } = await emailProviderRegister(
    credentials.email,
    credentials.password
  );

  const { name } = credentials;

  if (isNewUser) {
    const newUser = await save(`${basePath}/users`, {
      ...profileData,
      ...user,
      name,
      profileType,
    });

    return {
      user: newUser,
      idToken,
    };
  }

  const userData = await getById(
    `${basePath}/${profileType}s`,
    "email",
    user.email
  );

  return {
    user: userData,
    idToken,
  };
};

export const loginWithEmailAndPassword = async (email, password) => {
  const { user, idToken } = await emailProviderLogin(email, password);

  const userData = await getById(`${basePath}/users`, "email", user.email);

  return {
    user: userData,
    idToken,
  };
};

export const updateUserData = async (id, profileData) => {
  const response = await update(`${basePath}/users`, id, profileData);

  return response;
};

export const getCurrentUser = () => {
  return firebaseAuth.currentUser;
};
