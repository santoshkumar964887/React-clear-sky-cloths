export const addItemtoCart=(cartItem,cartItemToAdd)=>{
    const alreadyExist=cartItem.find(cartItem=>cartItem.id===cartItemToAdd.id);
    if(alreadyExist){
        return cartItem.map(cartItem=>cartItem.id===cartItemToAdd.id ? {...cartItem, quantity: cartItem.quantity+1}: cartItem );

    }
    return[...cartItem, {...cartItemToAdd, quantity: 1}]
};

export const RemoveItemToCart = (cartItem,cartItemToRemove)=>{
    const alreadyExistItem=cartItem.find(cartItem=>cartItem.id===cartItemToRemove.id);
    if (alreadyExistItem.quantity==1){
        return cartItem.filter(cartItem=> cartItem.id!==cartItemToRemove.id);

        

    }
 return(
     cartItem.map(cartItem=> cartItem.id===cartItemToRemove.id ? {...cartItem,quantity:cartItem.quantity-1}: cartItem
        )

 );

};