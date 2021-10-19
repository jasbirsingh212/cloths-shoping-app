import React from "react";
import ItemPreview from "../collection-item-preview/item-preview";
import "./collection-preview.scss";

const ColllectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1>{title}</h1>
      <div className="preview-card-container">
        {items
          .filter((item, idx) => idx < 4)
          .map(({id, ...otherProps}) => (
            // @ts-ignore
            <ItemPreview  key={id} {...otherProps}/>
          ))}
      </div>
    </div>
  );
};

export default ColllectionPreview;