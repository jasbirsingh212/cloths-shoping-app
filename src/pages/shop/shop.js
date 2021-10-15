import React from "react";
import "./shop.scss";
import ColllectionPreview from "../../components/collection-preview/collection-preview";
import { collectionItem } from "../../utils/constant";

const Shop = () => {
  return (
    <div className="container shop-container">
      {collectionItem.map(({ id, ...otherProps }) => (
        <ColllectionPreview key={id} {...otherProps} />
      ))}
    </div>
  );
};

export default Shop;
