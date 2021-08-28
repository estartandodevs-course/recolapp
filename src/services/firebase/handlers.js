import { SETTINGS } from "../../settings";
import { firebaseDatabase } from "./config";

export const save = async (path, body) => {
  const query = await firebaseDatabase
    .collection(`${SETTINGS.TABLES_NAME.BASE_URL}/${path}`)
    .add(body);

  const newData = await query
    .get()
    .then((snapshot) => ({
      ...snapshot.data(),
      id: snapshot.id,
    }))
    .then((data) => data);

  return newData;
};

export const getById = async (path, id = "", value = "") => {
  const list = [];
  const query = await firebaseDatabase
    .collection(path)
    .where(`${id}`, "==", `${value}`)
    .get();

  query.forEach((snapshot) =>
    list.push({
      ...snapshot.data(),
      id: snapshot.id,
    })
  );

  return list[0];
};

export const update = async (path, id, newData) => {
  await firebaseDatabase
    .collection(`${SETTINGS.TABLES_NAME.BASE_URL}/${path}`)
    .doc(id)
    .update(newData);

  return newData;
};

export const getAll = async (path, key = "", value = "") => {
  const list = [];

  const query = await firebaseDatabase
    .collection(`${SETTINGS.TABLES_NAME.BASE_URL}/${path}`)
    .where(`${key}`, "==", `${value}`)
    .get();

  query.forEach((snapshot) =>
    list.push({
      ...snapshot.data(),
      id: snapshot.id,
    })
  );

  return list;
};

export const getDoc = async (path, id) => {
  const response = await firebaseDatabase
    .collection(`${SETTINGS.TABLES_NAME.BASE_URL}/${path}`)
    .doc(id)
    .get();
  return { ...response.data(), id };
};

export const deleteDoc = async (path, id) => {
  await firebaseDatabase
    .collection(`${SETTINGS.TABLES_NAME.BASE_URL}/${path}`)
    .doc(id)
    .delete();

  return {
    message: "success",
    status: 201,
  };
};
