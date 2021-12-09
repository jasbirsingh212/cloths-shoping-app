// @ts-nocheck
import React, { useState } from "react";
import { BsCart } from "react-icons/bs";
import { Popover } from "antd";
import './cart-icon-popup.scss';
import { useSelector } from "react-redux";
import { selectedCartItemsCount } from "../../redux/cart/cart-selector";
import withSpinner from '../with-spinner-HOC/with-spinner-HOC';
import CartList from "../cart-list/cart-list";

const CartIconPopup = () => {
  
  const [openPopUp, setOpenPopUp] = useState(false);
  const data = useSelector((store) => store.cart.cartItem);
  const cartCount = useSelector((store) =>  selectedCartItemsCount(store) );
  const text = data?.length ? <span>Your Cart Items</span> : <span>Add Item To Cart</span>;
  const CartListWithSpinner = withSpinner(CartList);
  const content = (
    <CartListWithSpinner setOpenPopUp={setOpenPopUp} data={data?.length ? data : [] }/>
  );

  return (
    <Popover
      placement="bottomLeft"
      title={text}
      content={content}
      trigger="click"
      arrowPointAtCenter
      id='popup'
      visible={openPopUp}
    >
      <BsCart className='icon' size={30} onClick={() => setOpenPopUp(!openPopUp)} />
      <span className='cart-count'>{cartCount}</span>
    </Popover>
  );
};


export default CartIconPopup;
