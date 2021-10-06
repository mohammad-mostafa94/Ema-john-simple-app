import React from 'react';

const Cart = (props) => {

    const {cart } = props;
    
    // total price
    const total = cart.reduce((previous,product) =>previous + product.price,0);


    // const totalQuantity = cart.reduce((previous,product)=>  previous + product.quantity
    // ,0);

    // let total = 0;
    let totalQuantity = 0;
    
    for (const product of cart) {
        (!product.quantity) && (product.quantity = 1);
        
        // total  = total + product.price * product.quantity;

        (totalQuantity) ?(totalQuantity = totalQuantity + 1):(totalQuantity =  totalQuantity + product.quantity);
        
    }
    const shipping = total > 0 ? 15 : 0;
    const tax = (total + shipping) * 0.10;
    const gradTotal = total + shipping + tax;
    return (
        <div>
            <h2>Order Summary</h2>
            <h3>Items ordered: {totalQuantity}</h3>
            <h3>Total Price: {total.toFixed(2)}</h3>
            <h3>Shipping : {shipping}</h3>
            <h3>Tax : {tax.toFixed(2)}</h3>
            <hr/>
            <h2>Grand total: {gradTotal.toFixed(2)}</h2>
        </div>
    );
};

export default Cart;