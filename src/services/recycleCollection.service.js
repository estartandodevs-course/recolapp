/* eslint-disable */

import { useState } from "react";

import { SETTINGS } from "../settings";

// garbage collection = coleta de lixo

export const setCollectionCollector = (collect_id, user_id) => {
  const collections = getLocalStorage();

  const collectionsUpdate = collections.map((item) => {
    if (item.collection_id === collect_id) {
      return { ...item, collector_id: user_id };
    }
    return item;
  });

  localStorage.setItem(
    SETTINGS.TABLES_NAME.COLLECTIONS,
    JSON.stringify(collectionsUpdate)
  );
  return collectionsUpdate;
};

export const getCollectionsInZone = (city) => {
  const collections = getLocalStorage();
  const response = collections.filter((collect) => collect.city === city);
  return response;
};

export const getCollectionsByCollectorID = (user_id) => {
  const collections = getLocalStorage();
  const response = collections.filter(
    (collect) => collect.collector_id === user_id
  );
  return response;
};

export const getCollectionsByUserID = (user_id) => {
  const collections = getLocalStorage();
  const response = collections.filter((collect) => collect.user_id === user_id);
  return response;
};

export const getCollectByID = (collect_id) => {
  const collections = getLocalStorage();

  const response = collections.find(
    (collect) => collect.collection_id === collect_id
  );
  return response;
};

export const createCollect = ({ user, order, orderTimestamp }) => {
  const [collections] = useState(getCollectionsByUserID(user.id));

  const collect = {
    collection_id: collections.length + 1,
    collector_id: -1,
    title: "Aguardando cooperativa/coletor",
    user_id: user.id,
    zip: user.zip,
    street: user.street,
    city: user.city,
    timestamp: orderTimestamp,
    material: order,
  };

  collections.push(collect);
  localStorage.setItem(
    SETTINGS.TABLES_NAME.COLLECTIONS,
    JSON.stringify(collections)
  );
  return collect;
};

const getLocalStorage = () => {
  const storageCheck = localStorage.getItem(SETTINGS.TABLES_NAME.COLLECTIONS);

  return storageCheck === undefined
    ? storageCheck
    : JSON.parse(storageCheck) || [];
};
