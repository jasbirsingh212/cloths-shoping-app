// @ts-nocheck
import React from "react";
import { Table, Avatar } from "antd";
import { useSelector, useDispatch } from "react-redux";
import {
  AiOutlineCloseCircle,
  AiOutlinePlusCircle,
  AiOutlineMinusCircle,
} from "react-icons/ai";
import "./cart-summary.scss";
import { addToCart, clearFromCart, removeFromCart } from "../../redux/cart/cart-action";

const CartSummary = () => {
  const data = useSelector((state) => state.cart.cartItem);
  const dispatch = useDispatch();
  const handleRemove = (item) => {
    dispatch(clearFromCart(item));
  };

  const columns = [
    {
      title: "Product",
      dataIndex: "imageUrl",
      key: "imageUrl",
      render: (imageUrl) => <Avatar size={64} src={imageUrl} />,
    },
    {
      title: "Description",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Quantity",
      key: "quantity",
      render: (item) => <Quantity item={item} quantity={item.quantity} />,
    },
    {
      title: "Price ( per item )",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Remove",
      key: "remove",
      render: (data) => (
        <AiOutlineCloseCircle onClick={() => handleRemove(data)} size={30} />
      ),
    },
  ];
  return (
    <div>
      <Table dataSource={data?.length ? data : []} columns={columns} />
    </div>
  );
};

const Quantity = ({ item, quantity }) => {
  const dispatch = useDispatch();

  return (
    <span>
      <AiOutlinePlusCircle
        size={25}
        onClick={() => dispatch(addToCart(item))}
      />
      <strong className="quantity">{quantity}</strong>
      <AiOutlineMinusCircle
        size={25}
        onClick={() => dispatch(removeFromCart(item))}
      />
    </span>
  );
};

export default CartSummary;
