import React from "react";
import ColllectionPreview from "../../components/collection-preview/collection-preview";
import { collectionItem } from "../../utils/constant";

const CollectionPage = ({ match }) => {
  const {
    params: { category },
  } = match;
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
