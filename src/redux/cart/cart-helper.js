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