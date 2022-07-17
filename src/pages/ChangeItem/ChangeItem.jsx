<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState, useEffect } from "react";
=======
import React, { useEffect } from "react";
>>>>>>> 38d5df3 (fix input extend, moved dispatch to useEffect)
=======
import React, { useEffect } from "react";
>>>>>>> 38d5df3 (fix input extend, moved dispatch to useEffect)
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Card from "../../containers/Card";
import Input from "../../components/Input/Input";
import TextArea from "../../components/TextArea/TextArea";
import ComponentsWrapper from "../../components/ComponentsWrapper/ComponentsWrapper";
import Select from "../../components/Select/Select";
import PageTitle from "../../components/PageTitle";
import Button from "../../components/Button";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  changeCollectionItem,
  setSelectedItemIdAction,
} from "../../store/ItemsCollection/actions";
import Flex from "../../components/Flex";
import { CardContainer } from "./styled";
import { selectedItemInfoSelector } from "../../store/ItemsCollection/selectors";

function ChangeItem() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id } = useParams();
<<<<<<< HEAD
<<<<<<< HEAD
  useEffect(() => {
    dispatch(setSelectedItemIdAction(id));
  }, [id, dispatch]);

  const [selectedItem] = useSelector(selectedItemInfoSelector);
  const [collectionItem, setCollectionItem] = useState(selectedItem);

  function addTitle(value) {
    setCollectionItem({ ...collectionItem, title: value });
  }

  function changeNewItemDescription(value) {
    setCollectionItem({ ...collectionItem, description: value });
  }
  function changeCollection(value) {
    setCollectionItem({ ...collectionItem, collection: value });
  }

  const changeItem = () => {
=======
=======
>>>>>>> 38d5df3 (fix input extend, moved dispatch to useEffect)
  // dispatch(setSelectedItemIdAction(id));
  const selectedItem = useSelector(selectedItemInfoSelector); //TODO change name - "initial item info"
  const collection =
    selectedItem && selectedItem.collection ? selectedItem.collection : "";
  const itemCollection = useSelector((state) =>
    collectionDetailSelector(state, collection)
  );
  useEffect(() => {
    dispatch(setSelectedItemIdAction(id));
  }, [id, dispatch]);
  const changeItem = (collectionItem, selectedOptionValue) => {
>>>>>>> 38d5df3 (fix input extend, moved dispatch to useEffect)
    dispatch(changeCollectionItem(collectionItem));
    navigate("/");
  };

  return (
    <>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      <PageTitle>Edit Your Collection Item</PageTitle>
      <Flex>
        <CardContainer>
          <Card {...collectionItem} />
        </CardContainer>
        <Flex direction={"column"} justify={"center"}>
          <ComponentsWrapper mb={"10"}>
            <Select select={changeCollection} />
          </ComponentsWrapper>
          <Input onChange={addTitle} />
          <ComponentsWrapper mb={"5"} mt={"10"}>
            <TextArea changeDescription={changeNewItemDescription} />
          </ComponentsWrapper>
          <Button onClick={changeItem} warning>
            Change
          </Button>
        </Flex>
      </Flex>
=======
=======
>>>>>>> 38d5df3 (fix input extend, moved dispatch to useEffect)
      {id ? (
=======
      {selectedItem ? (
>>>>>>> 798a48b (add mockapi preload data)
        <HandleItemInfo
          selectedItem={selectedItem}
          itemCollection={itemCollection}
          pageTitle={"Edit Your Collection Item"}
          onSubmit={changeItem}
          buttonText={"Change"}
        />
      ) : (
        <p>Wait, data is loading...</p>
      )}
<<<<<<< HEAD
>>>>>>> 38d5df3 (fix input extend, moved dispatch to useEffect)
=======
>>>>>>> 38d5df3 (fix input extend, moved dispatch to useEffect)
    </>
  );
}

export default ChangeItem;
