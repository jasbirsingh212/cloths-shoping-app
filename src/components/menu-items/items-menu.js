import React from 'react';
import Item from '../item/Item';
import { shopItems } from '../../utils/constant';
import './item-menu.scss';

const itemsMenu = () => {
    return (
        <div className="items-container">
        <Item data={shopItems} />
      </div>
    )
}

export default itemsMenu;
