import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import Card from "../../containers/Card";
import Input from "../../components/Input/Input";
import TextArea from "../../components/TextArea/TextArea";
import ComponentsWrapper from "../../components/ComponentsWrapper/ComponentsWrapper";
import Select from "../../components/Select/Select";
import PriceInput from "../../components/PriceInput";
import PageTitle from "../../components/PageTitle";
import Button from "../../components/Button";
import Flex from "../../components/Flex";
import { allCollectionsSelector } from "../../store/Collections/selectors";
import uuid from "react-uuid";

function HandleItemInfo({
  itemCollection,
  id,
  selectedItem,
  pageTitle,
  buttonText,
  onSubmit,
}) {
  const initialCollectionItem = {
    price: null,
    title: "",
    collection: null,
    description: "",
    photo: "https://picsum.photos/200/300",
  };
  const [collectionItem, setCollectionItem] = useState(
    selectedItem ? selectedItem : initialCollectionItem
  );
  const activityFlag = useRef(false);
  const inputTitle = useRef(null);
  const collections = useSelector(allCollectionsSelector);
  const [selectedOptionValue, setSelectedOptionValue] = useState(null);
  const changeActivityFlag = () => {
    activityFlag.current = true;
  };

  useEffect(() => {
    inputTitle.current.focus();
  }, []);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!activityFlag.current)
        alert(
          "“Learn as if you will live forever, live like you will die tomorrow.” — Mahatma Gandhi"
        );
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  function addTitle(value) {
    changeActivityFlag();
    setCollectionItem({ ...collectionItem, title: value });
  }

  function changeNewItemDescription(value) {
    changeActivityFlag();
    setCollectionItem({ ...collectionItem, description: value });
  }
  function changeCollection(value) {
    changeActivityFlag();
    setCollectionItem({ ...collectionItem, collection: value.label });
    setSelectedOptionValue(value);
  }
  function changeItemPrice(value) {
    changeActivityFlag();
    setCollectionItem({ ...collectionItem, price: value });
  }

  return (
    <>
      <PageTitle>{pageTitle}</PageTitle>
      <Flex>
        <Flex direction={"column"} justify={"center"} align="center">
          <Card edited={true} {...collectionItem} />
        </Flex>
        <Flex direction={"column"} justify={"center"}>
          <ComponentsWrapper mb={"10"}>
            <Select
              onKeyDown={changeActivityFlag}
              selectedItem={itemCollection}
              options={collections}
              select={changeCollection}
            />
          </ComponentsWrapper>
          <Input
            ref={inputTitle}
            value={collectionItem.title ? collectionItem.title : ""}
            onChange={addTitle}
            placeholder="Add title..."
          />
          <ComponentsWrapper mb={"5"} mt={"10"}>
            <PriceInput
              value={collectionItem.price ? collectionItem.price : ""}
              onChange={changeItemPrice}
            ></PriceInput>
          </ComponentsWrapper>
          <ComponentsWrapper mb={"5"} mt={"10"}>
            <TextArea
              value={collectionItem.description}
              changeDescription={changeNewItemDescription}
            />
          </ComponentsWrapper>
          <Button
            onClick={() => onSubmit(collectionItem, selectedOptionValue)}
            warning
          >
            {buttonText}
          </Button>
        </Flex>
      </Flex>
    </>
  );
}

export default HandleItemInfo;
