/* eslint-disable */

import { SETTINGS } from "../settings";

import { deleteDoc } from "./firebase/handlers";

export const removeAccount = (array) => {
  array.forEach((element) => {
    (async () => {
      const response = await deleteDoc(SETTINGS.TABLES_NAME.USERS, element);
      console.log("conta deletada", response);
    })();
  });
};

export const removeCollections = (array) => {
  array.forEach((element) => {
    (async () => {
      const response = await deleteDoc(
        SETTINGS.TABLES_NAME.COLLECTIONS,
        element
      );
      console.log("conta deletada", response);
    })();
  });
};
