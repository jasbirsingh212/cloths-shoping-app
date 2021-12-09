// @ts-nocheck
import React from "react";
import ColllectionPreview from "../../components/collection-preview/collection-preview";
import { useSelector } from "react-redux";

const CollectionPage = ({ match }) => {
  const {
    params: { category },
  } = match;

  const collectionItem = useSelector((store) => store?.collections?.data)
  const collection = collectionItem.find((item) => item.routeName === category);

  return (
    <div className="container">
      <ColllectionPreview
        title={category.toUpperCase()}
        items={collection?.items}
        limit={collection?.items?.length} 
      />
    </div>
  );
};

export default CollectionPage;
