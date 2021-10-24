import React from "react";
import { List, Avatar } from "antd";
import { Link } from "react-router-dom";
import { AiOutlineCloseCircle } from "react-icons/ai";
import "./cart-list.scss";
import { useDispatch } from "react-redux";
import { clearFromCart } from "../../redux/cart/cart-action";

const CartList = ({ data, setOpenPopUp }) => {
  const dispatch = useDispatch();
  // @ts-ignore
  return (
    <>
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item) => {
          const { imageUrl, name, quantity, price } = item;
          return (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src={imageUrl} />}
                // eslint-disable-next-line jsx-a11y/anchor-is-valid
                title={<a href="#">{name}</a>}
                description={`${quantity} x $${price}`}
              />
              <AiOutlineCloseCircle
                size={25}
                onClick={() => dispatch(clearFromCart(item))}
              />
            </List.Item>
          );
        }}
      />
      {data?.length ? (
        <Link
          to="/cart"
          className="link-btn ant-btn ant-btn-default ant-btn-round ant-btn-lg btn-add-cart"
          onClick={() => setOpenPopUp(false)}
        >
          Go To Cart
        </Link>
      ) : null}
    </>
  );
};

export default CartList;
