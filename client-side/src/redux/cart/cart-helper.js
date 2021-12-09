export const groupItems = ( cartItems, cartItem ) => {

    try {
        if(cartItems && cartItems.length){
            const exists = cartItems.find((oldItem) => oldItem.id === cartItem.id)
            
            if(exists){
                
                const newCartItems = cartItems.map(item => {

                    return  item.id === cartItem.id ? {...item, quantity: item?.quantity + 1} : item
                })

                return newCartItems;
            }
    
        }
        return [...cartItems, {...cartItem, quantity: 1 }]
        
    } catch (error) {
        console.log(error)
    }


} 


export const clearFromCart = (cartItems, cartItem) => {

    return cartItems.filter((item) => item.id !== cartItem.id)
}

export const removeItem = (cartItems, cartItem) => {

    try {
        const existingCartItem = cartItems.find(
            Item => Item.id === cartItem.id
          );
        
          if (existingCartItem.quantity === 1) {
            return cartItems.filter(Item => Item.id !== cartItem.id);
          }
        
          return cartItems.map(Item =>
            Item.id === cartItem.id
              ? { ...Item, quantity: Item.quantity - 1 }
              : Item
          );
    } catch (error) {
        console.log(error)
    }
}