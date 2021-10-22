import React from "react";
import { Button, Card } from "antd";
import "./item-preview.scss";
import { connect } from 'react-redux';
import { addToCart } from "../../redux/cart/cart-action";

const { Meta } = Card;

const ItemPreview = (props) => {

  const {addToCart} = props;
  const { imageUrl, price, name } = props.item;

  const handleClick = () => {
    const { item } = props;
    addToCart(item)
  }

  return (
    <Card
      style={{ width: 260 }}
      cover={<img alt="example" src={imageUrl} className="image" />}
      className="preview-card"
      hoverable
    >
      <Meta title={`$${price}`} description={name} />
      <Button
        size="large"
        type="default"
        shape="round"
        className="btn-add-cart"
        onClick={handleClick}
      >
        Add To Cart
      </Button>
    </Card>
  );
};

const mapDispatchToProps = (dispatch) => {

  return {
    addToCart: (item) => dispatch(addToCart(item))
  }

}

export default connect(null, mapDispatchToProps)(ItemPreview);
