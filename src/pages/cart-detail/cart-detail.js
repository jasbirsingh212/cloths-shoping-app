import React from 'react';
import './cart-detail.scss';
import CartSummary from '../../components/cart-summry-table/cart-summary-table';
import { selectedCartItemTotalPrice } from '../../redux/cart/cart-selector';
import { useSelector } from 'react-redux';

const cartDetail = () => {
    return (
        <div className='container cart-detail'>
            <CartSummary key='summary' />
            <TotalAmount key='total-amount' />
        </div>
    )
}

const TotalAmount = () => {

    const totalAmount = useSelector((store) => selectedCartItemTotalPrice(store))

    return <h2 className='total-amount'>Total:{" $ "}{totalAmount}</h2>
}

export default cartDetail;
