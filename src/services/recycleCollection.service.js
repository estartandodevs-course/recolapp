/* eslint-disable */

import { useState } from "react";

import { SETTINGS } from "../settings";

const { uuid } = require("uuidv4");

// garbage collection = coleta de lixo

export const removeCollection = (collect_id, user_id) => {
  const collections = getAllCollections();

  const collectionsUpdate = collections.filter(
    (item) =>
      item.collection_id !== collect_id && item?.collector_id !== user_id
  );

  console.log("collectionsUpdate", collectionsUpdate);

  setLocalStorage(collectionsUpdate);
  return collectionsUpdate;
};

export const removeCollectorCollection = (collect_id, user_id) => {
  const collections = getAllCollections();

  const collectionsUpdate = collections.map((item) => {
    if (item.collection_id === collect_id && item?.collector_id === user_id) {
      return { ...item, collector_id: "" };
    }
    return item;
  });

  setLocalStorage(collectionsUpdate);
  return collectionsUpdate;
};

export const setCollectionCollector = (collect_id, user_id) => {
  const collections = getAllCollections();

  const collectionsUpdate = collections.map((item) => {
    if (item.collection_id === collect_id) {
      return { ...item, collector_id: user_id };
    }
    return item;
  });

  setLocalStorage(collectionsUpdate);
  return collectionsUpdate;
};

export const getCollectionsInZone = (city) => {
  const collections = getAllCollections();
  const response = collections.filter((collect) => collect.city === city);
  return response;
};

export const getCollectionsByCollectorID = (user_id) => {
  const collections = getAllCollections();
  const response = collections.filter(
    (collect) => collect.collector_id === user_id
  );
  return response;
};

export const getCollectionsByUserID = (user_id) => {
  const collections = getAllCollections();
  const response = collections.filter((collect) => collect.user_id === user_id);
  return response;
};

export const getAllCollections = () => {
  const response = getLocalStorage();
  return response;
};

export const getCollectByID = (collect_id) => {
  const collections = getAllCollections();

  const response = collections.find(
    (collect) => collect.collection_id === collect_id
  );
  return response;
};

export const createCollect = ({ user, order, orderTimestamp }) => {
  const allCollections = getAllCollections();
  const [collections] = useState(allCollections);

  const collect = {
    collection_id: uuid(),
    collector_id: "",
    title: "Aguardando cooperativa/coletor",
    user_id: user.id,
    zip: user.zip,
    street: user.street,
    city: user.city,
    timestamp: orderTimestamp,
    material: order,
  };

  collections.push(collect);
  setLocalStorage(collections);
  return collect;
};

const getLocalStorage = () => {
  const storageCheck = localStorage.getItem(SETTINGS.TABLES_NAME.COLLECTIONS);

  return storageCheck === undefined
    ? storageCheck
    : JSON.parse(storageCheck) || [];
};

const setLocalStorage = (data) => {
  localStorage.setItem(SETTINGS.TABLES_NAME.COLLECTIONS, JSON.stringify(data));
};
