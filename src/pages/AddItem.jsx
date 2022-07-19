import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addNewItem } from "../store/ItemsCollection/reducer";
import { addCollectionItem } from "../store/ItemsCollection/actions";
import { addCollectionAction } from "../store/Collections/actions";
import HandleItemInfo from "../containers/HandleItemInfo";

function AddItem() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addItem = (collectionItem, selectedOptionValue) => {
    dispatch(addNewItem(collectionItem));
    dispatch(addCollectionAction(selectedOptionValue));
    navigate("/");
  };
  return (
    <>
      <HandleItemInfo
        pageTitle={"Add New Collection Item"}
        buttonText={"Add"}
        onSubmit={addItem}
      />
    </>
  );
}

export default AddItem;
