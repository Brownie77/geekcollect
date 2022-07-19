import React from "react";
import { Link } from "react-router-dom";

import {
  CardWrapper,
  CardImage,
  CardDescription,
  CardDescriptionWrapper,
  CardInfoWrapper,
  CardPrice,
  MainCardInfo,
  CardTitle,
  IconBar,
  CollectionName,
} from "./styled";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { useDispatch } from "react-redux";
// import { deleteCollectionItem } from "../../store/ItemsCollection/actions";
import { deleteItem } from "../../store/ItemsCollection/reducer";

function Card({ edited, id, price, title, description, collection }) {
  const dispatch = useDispatch();

  function deleteCollectionItem() {
    dispatch(deleteItem({ id }));
  }
  return (
    <CardWrapper>
      {!edited && (
        <IconBar>
          <Link to={`/item/change/${id}`}>
            <ModeEditIcon sx={{ fontSize: 25 }} />
          </Link>
          <DeleteForeverIcon
            onClick={deleteCollectionItem}
            sx={{ fontSize: 25, color: "white", cursor: "pointer" }}
          />
        </IconBar>
      )}
      <CardImage edited={edited}></CardImage>

      <CardInfoWrapper>
        <MainCardInfo>
          <CardTitle>{title}</CardTitle>
          <CardPrice>{price ? `$${price}` : "Not For Sale"}</CardPrice>
        </MainCardInfo>
        <CollectionName>Collection: {collection}</CollectionName>

        <CardDescriptionWrapper>
          <CardDescription>{description}</CardDescription>
        </CardDescriptionWrapper>
      </CardInfoWrapper>
    </CardWrapper>
  );
}

export default Card;
