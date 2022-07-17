import { createSelector } from "@reduxjs/toolkit";

const allCollectionsSelector = (state) => state.collections.allCollections;
const collectionDetailSelector = createSelector(
  [
    (state) => state.collections.allCollections,
    (state, collectionLabel) => collectionLabel,
  ],
  (collections, collectionLabel) => {
    console.log(
      collections.find((collection) => collection.label === collectionLabel)
    );
    collections.find((collection) => collection.label === collectionLabel);
  }
);

export { allCollectionsSelector, collectionDetailSelector };
