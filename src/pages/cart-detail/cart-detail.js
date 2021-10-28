import React from 'react';
import './cart-detail.scss';
import CartSummary from '../../components/cart-summry-table/cart-summary-table';
import { selectedCartItemTotalPrice } from '../../redux/cart/cart-selector';
import { useSelector } from 'react-redux';
import StripeButton from '../../components/stripe-button/stripe';

const CartDetail = () => {
    const totalAmount = useSelector((store) => selectedCartItemTotalPrice(store))
    return (
        <div className='container cart-detail'>
            <CartSummary key='summary' />
            <TotalAmount key='total-amount' totalAmount={totalAmount} />
            <StripeButton price={totalAmount} />
        </div>
    )
}

const TotalAmount = ({totalAmount}) => {
    return <h2 className='total-amount'>Total:{" $ "}{totalAmount}</h2>
}

export default CartDetail;
