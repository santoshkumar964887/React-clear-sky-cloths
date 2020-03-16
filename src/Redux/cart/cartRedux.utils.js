export const addItemtoCart=(cartItem,cartItemToAdd)=>{
    const alreadyExist=cartItem.find(cartItem=>cartItem.id==cartItemToAdd.id);
    if(alreadyExist){
        return cartItem.map(cartItem=>cartItem.id==cartItemToAdd.id ? {...cartItem, quantity: cartItem.quantity+1}: cartItem );

    }
    return[...cartItem, {...cartItemToAdd, quantity: 1}]
};