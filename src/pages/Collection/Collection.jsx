import React, { useEffect } from "react";
import Card from "../../containers/Card";
import { useSelector, useDispatch } from "react-redux";
import {
  CollectionContainer,
  MockImage,
  EmptyCollectionContainer,
  EmptyTitle,
} from "./styled";
import noElementsImage from "../../assets/images/svg/father-and-daughter.svg";
import { collectionSelector } from "../../store/ItemsCollection/selectors";
import { fetchItems } from "../../store/ItemsCollection/reducer";

function Collection() {
  const collectionItems = useSelector(collectionSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);
  return (
    <CollectionContainer>
      {collectionItems.length ? (
        collectionItems.map((item) => {
          return (
            <Card
              key={item.id}
              id={item.id}
              title={item.title}
              description={item.description}
            />
          );
        })
      ) : (
        <EmptyCollectionContainer>
          <MockImage src={noElementsImage} alt="" />
          <EmptyTitle>Your collection is empty...</EmptyTitle>
        </EmptyCollectionContainer>
      )}
    </CollectionContainer>
  );
}

export default Collection;
