 export const CartAction=()=>({
   type:'Hidden_Cart'
});
export const addCartItem=item=>({
  type: 'cartItem',
  payload: item
});
export const ClearItemfromCart= item=>({
  type :'clearItem',
  payload: item
});
export const RemoveItem=(item)=>({
  type:'removeItem',
  payload: item
})