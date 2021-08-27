import { SETTINGS } from "../settings";
import { firebaseDatabase } from "./firebase/config";

export const getUserById = async (user_id) => {
  const list = [];
  const query = await firebaseDatabase
    .collection(`${SETTINGS.TABLES_NAME.BASE_URL}/users`)
    .get();

  query.forEach((snapshot) =>
    list.push({
      ...snapshot.data(),
      id: snapshot.id,
    })
  );
  const response = list.find((user) => user.id === user_id);
  return response;
};
