import React from 'react';
import './cart-detail.scss';
import CartSummary from '../../components/cart-summry-table/cart-summary-table';

const cartDetail = () => {
    return (
        <div className='container cart-detail'>
            <CartSummary />
        </div>
    )
}

export default cartDetail;
