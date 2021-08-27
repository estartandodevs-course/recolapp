/* eslint-disable */

import { SETTINGS } from "../settings";
import {
  deleteDoc,
  getAll,
  getDoc,
  save,
  update,
} from "../services/firebase/handlers";

export const removeCollection = async (collect_id) => {
  return await deleteDoc(SETTINGS.TABLES_NAME.COLLECTIONS, collect_id);
};

export const removeCollectorCollection = async (collect_id) => {
  await update(SETTINGS.TABLES_NAME.COLLECTIONS, collect_id, {
    collector_id: "",
  });
  return {
    message: "success",
    status: 201,
  };
};

export const setCollectionCollector = async (collect_id, collector_id) => {
  await update(SETTINGS.TABLES_NAME.COLLECTIONS, collect_id, {
    collector_id: collector_id,
  });
  return {
    message: "success",
    status: 201,
  };
};

export const getCollectionsInZone = async (city) => {
  const collections = await getAll(
    SETTINGS.TABLES_NAME.COLLECTIONS,
    "city",
    city
  );
  return collections.filter((item) => item.collector_id === "");
};

export const getCollectionsByCollectorID = async (collector_id) => {
  const collections = await getAll(
    SETTINGS.TABLES_NAME.COLLECTIONS,
    "collector_id",
    collector_id
  );
  return collections;
};

export const getCollectionsByUserID = async (user_id) => {
  const collections = await getAll(
    SETTINGS.TABLES_NAME.COLLECTIONS,
    "user_id",
    user_id
  );
  return collections;
};

export const getCollectByID = async (collect_id) => {
  const collect = await getDoc(SETTINGS.TABLES_NAME.COLLECTIONS, collect_id);
  return collect;
};

export const createCollect = ({ user, order, orderTimestamp }) => {
  const timeStamp = new Date(orderTimestamp);

  const date = timeStamp.toLocaleDateString("pt-BR").slice(0, 5);
  const time = timeStamp.toLocaleTimeString("pt-BR").slice(0, 5);

  const day = timeStamp.getDay();

  const collect = {
    collector_id: "",
    title: "Aguardando cooperativa/coletor",
    author: user,
    user_id: user.id,
    zip: user.zip,
    street: user.street,
    city: user.city,
    timestamp: orderTimestamp,
    date,
    time,
    day,
    material: order,
  };

  save(SETTINGS.TABLES_NAME.COLLECTIONS, collect);
  return collect;
};
