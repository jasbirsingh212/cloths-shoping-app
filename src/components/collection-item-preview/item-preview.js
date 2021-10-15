import React from "react";
import { Card } from 'antd';
import './item-preview.scss';

const { Meta } = Card;

const ItemPreview = ({ imageUrl, price, name }) => {
  return (
    <Card
      style={{ width: 260 }}
      cover={
        <img
          alt="example"
          src={imageUrl}
          className='image'
        />
      }
      className='preview-card'
      hoverable
    >
      <Meta
        title={`$${price}`}
        description={name}
      />
    </Card>
  );
};

export default ItemPreview;
