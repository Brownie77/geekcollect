import React, { useEffect } from "react";
import Card from "../../containers/Card";
import { useSelector, useDispatch } from "react-redux";
import PageTitle from "../../components/PageTitle";
import {
  CollectionContainer,
  MockImage,
  EmptyCollectionContainer,
  EmptyTitle,
} from "./styled";
import noElementsImage from "../../assets/images/svg/father-and-daughter.svg";
import {
  collectionSelector,
  CollectionItemStatusSelector,
  CollectionItemErrorSelector,
} from "../../store/ItemsCollection/selectors";
import { fetchItems } from "../../store/ItemsCollection/reducer";

function Collection() {
  const collectionFetchStatus = useSelector(CollectionItemStatusSelector);
  const collectionFetchError = useSelector(CollectionItemErrorSelector);
  const collectionItems = useSelector(collectionSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);
  return (
    <CollectionContainer>
      {collectionFetchStatus === "loading" && (
        <PageTitle>Items is loading, please wait</PageTitle>
      )}
      {collectionFetchError && (
        <PageTitle>An error occured: {collectionFetchError}</PageTitle>
      )}
      {collectionItems && collectionItems.length ? (
        collectionItems.map((item) => {
          console.log(item);
          return (
            <Card
              price={item.price}
              collection={item.collection}
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
