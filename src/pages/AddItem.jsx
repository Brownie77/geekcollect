import React, { useState, useId } from "react";
import { useNavigate } from "react-router-dom";
import { ImageUpload } from "../components/ImageUpload";
import Button from "../components/Button";
import Flex from "../components/Flex";
import Input from "../components/Input";
import TextArea from "../components/TextArea/TextArea";
import ComponentsWrapper from "../components/ComponentsWrapper";
import Select from "../components/Select/Select";
import Card from "../containers/Card";
import PageTitle from "../components/PageTitle";
import { useDispatch } from "react-redux";
import { addCollectionItem } from "../store/ItemsCollection/actions";
import { addNewItem } from "../store/ItemsCollection/reducer";
import { addCollectionAction } from "../store/Collections/actions";
import HandleItemInfo from "../containers/HandleItemInfo";

function AddItem() {
  const uniqueId = useId();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [collectionItem, setCollectionItem] = useState({
    id: uniqueId,
    title: "",
    collection: "without collection",
    description: "",
    photo: "https://picsum.photos/200/300",
  });

  const addItem = (collectionItem, selectedOptionValue) => {
    dispatch(addNewItem(collectionItem));
    dispatch(addCollectionAction(selectedOptionValue));
    navigate("/");
  };
  return (
    <>
      <PageTitle>Add new item to your collection</PageTitle>
      <Flex>
        <Flex direction={"column"} justify={"center"} align="center">
          <Card
            edited
            id={collectionItem.id}
            title={collectionItem.title}
            description={collectionItem.description}
          />
        </Flex>
        <Flex direction={"column"}>
          <ComponentsWrapper mb={"10"}>
            <Select select={changeItemCollection} />
          </ComponentsWrapper>
          <Input
            onChange={addTitle}
            type="text"
            name="collection-name"
            id="collectionName"
          />
          <ComponentsWrapper mb={"5"} mt={"10"}>
            <TextArea changeDescription={changeNewItemDescription} />
          </ComponentsWrapper>
          <Button onClick={addItem} warning>
            Add
          </Button>
        </Flex>
      </Flex>
    </>
  );
}

export default AddItem;
