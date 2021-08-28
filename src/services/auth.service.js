import {
  emailProviderLogin,
  emailProviderRegister,
} from "./firebase/authEmail";
import { getById, save, update } from "./firebase/handlers";
import { firebaseAuth } from "./firebase/config";
import { SETTINGS } from "../settings";

export const signOut = (history, setUser) => {
  firebaseAuth.signOut();
  setUser({});
  history.push("/");
  location.reload();
};

export const registerWithEmailAndPassword = async (
  credentials, // { email, password, name }
  profileType, // "empreedor" || "coletor"
  profileData // { ... }
) => {
  const { user, idToken } = await emailProviderRegister(
    credentials.email,
    credentials.password
  );

  const { name } = profileData;

  const newUser = await save(SETTINGS.TABLES_NAME.USERS, {
    ...profileData,
    ...user,
    name,
    profileType,
  });

  return {
    user: newUser,
    idToken,
  };
};

export const loginWithEmailAndPassword = async (email, password) => {
  const { user, idToken } = await emailProviderLogin(email, password);

  const userData = await getById(
    `${SETTINGS.TABLES_NAME.BASE_URL}/users`,
    "id",
    user.id
  );

  return {
    user: userData,
    idToken,
  };
};

export const updateUserData = async (id, profileData) => {
  const response = await update(
    `${SETTINGS.TABLES_NAME.BASE_URL}/users`,
    id,
    profileData
  );

  return response;
};

export const getCurrentUser = () => {
  return firebaseAuth.currentUser;
};
