/* eslint-disable */

import { useState } from "react";

import { Settings } from "../../Settings";

export const getCollectionsByUserID = (user_id) => {
  const collections =
    JSON.parse(localStorage.getItem(Settings.TABLES_NAME.COLLECTIONS)) || [];
  const response = collections.filter((collect) => collect.user_id === user_id);
  return response;
};

export const getCollectByID = (collect_id) => {
  const collections =
    JSON.parse(localStorage.getItem(Settings.TABLES_NAME.COLLECTIONS)) || [];

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
    timestamp: orderTimestamp,
    material: order,
  };

  collections.push(collect);
  localStorage.setItem(
    Settings.TABLES_NAME.COLLECTIONS,
    JSON.stringify(collections)
  );
  return collect;
};
