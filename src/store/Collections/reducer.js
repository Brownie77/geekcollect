import { createSlice } from "@reduxjs/toolkit";
const collectionSlice = createSlice({
  name: "collections",
  initialState: {
    allCollections: [],
    collectionDetail: null,
  },
  reducers: {
    addCollectionAction(state, action) {
      const existingValue = state.allCollections.some(
        (collection) => collection.value === action.payload.value
      );
      if (!existingValue) {
        state.allCollections.push(action.payload);
      }
    },
    setCollectionDetailAction(state, action) {
      state.collectionDetail = state.allCollections.find(
        (collection) => collection.value === action.payload
      );
    },
  },
});

export const { addCollectionAction, setCollectionDetailAction } =
  collectionSlice.actions;
export default collectionSlice.reducer;
