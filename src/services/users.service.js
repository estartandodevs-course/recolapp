import { getById } from "./firebase/handlers";
import { SETTINGS } from "../settings";

export const getUserById = async (user_id) => {
  const response = await getById(
    `${SETTINGS.TABLES_NAME.BASE_URL}/users`,
    "id",
    user_id
  );
  return response;
};
