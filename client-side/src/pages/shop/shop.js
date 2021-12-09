// @ts-nocheck
import React from "react";
import "./shop.scss";
import ColllectionPreview from "../../components/collection-preview/collection-preview";
import { useSelector } from "react-redux";

const Shop = () => {

  const collectionItem = useSelector((store) => store?.collections?.data)
  return (
    <div className="container shop-container">
      {collectionItem && collectionItem.map(({ id, ...otherProps }) => (
        <ColllectionPreview key={id} {...otherProps} limit={4} />
      ))}
    </div>
  );
};

export default Shop;
