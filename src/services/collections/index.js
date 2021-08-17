/* eslint-disable */

import { collections } from "../../mock/collections";

export const getCollectionsByUserID = (user_id) => {
  const response = collections.filter((collect) => collect.user_id === user_id);
  return response;
};

export const getCollectByID = (collect_id) => {
  const response = collections.find(
    (collect) => collect.collection_id === collect_id
  );
  return response;
};
