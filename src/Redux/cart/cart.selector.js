import {createselector, createSelector} from 'reselect';
const selectCart=state=>state.cart;
export const selectCartItems= createSelector(
    [selectCart],
    cart=>cart.cartItem
);
export const selectCartItemsCount= createSelector(
    [selectCartItems],
    cartItem=>cartItem.reduce((total,cartItem)=>total+cartItem.quantity,0)
);

export const selectTotal=createSelector(
    [selectCartItems],
    cartItem=>cartItem.reduce((total,cartItem)=>total+cartItem.quantity*cartItem.price,0)
);



