import {createSelector} from 'reselect';
const selectUser= state=>state.user;
const selectHidden= state=>state.cart;
export const selectCartHiddn=createSelector(
    [selectHidden],
    cart=>cart.Hidden
);
export const selectCurrentUser= createSelector(
    [selectUser],
    (user)=>user.currentUser
);
