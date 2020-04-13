import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
const StripeCheckoutButton=({price})=>{
    const PriceStripe=price*100;
    const publishablekey="pk_test_hMzyia9jY0IbVNmrzBrKPhVr00cKUfjBBt";
    const onToken=token=>{
        console.log(token);
        alert('Payment Successful');
    }
    return(
        <StripeCheckout label='Pay Now'
         name='Clear Sky Cloths Private Ltd.'
         billingAddress
         shippingAddress 
         image='https://svgshare.com/i/CUz.svg' 
         description={`Your total is $${price}`} 
         amount={PriceStripe}  
         panelLabel='Pay Now' 
         token={onToken} 
         stripeKey="pk_test_hMzyia9jY0IbVNmrzBrKPhVr00cKUfjBBt"
          />
    )
};
export default StripeCheckoutButton;