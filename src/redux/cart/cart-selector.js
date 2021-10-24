import { createSelector } from "reselect";

const selectedCart = (state) => state.cart;

export const selectedCartItems = createSelector(
  [selectedCart],
  (cart) => cart.cartItem
);

export const selectedCartItemsCount = createSelector(
  [selectedCartItems],
  (cartItem) => {
    return  cartItem.reduce(
      (accumulatedQuantity, Item) =>{
          return accumulatedQuantity + Item.quantity
      },
      0
    );
  }
);

export const selectedCartItemTotalPrice = createSelector(
  [selectedCartItems],
  (cartItem) => {
    cartItem.reduce(
      (accumulatedTotalPrice, Item) =>
        accumulatedTotalPrice + Item.quantity * Item.price,

      0
    );
  }
);
