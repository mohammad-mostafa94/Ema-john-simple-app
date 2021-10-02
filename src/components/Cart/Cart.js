import React from 'react';

const Cart = (props) => {

    const {cart } = props;
    
    const total = cart.reduce((previous,product) => {return previous + product.price},0);

    const shipping = total > 0 ? 15 : 0;
    const tax = (total + shipping) * 0.10;
    const gradTotal = total + shipping + tax;
    return (
        <div>
            <h2>Order Summary</h2>
            <h3>Items ordered:{cart.length}</h3>
            <h4>Total Price:{total.toFixed(2)}</h4>
            <h3>Shipping : {shipping}</h3>
            <h3>Tax : {tax.toFixed(2)}</h3>
            <hr />
            <h2>Grand total: {gradTotal.toFixed(2)}</h2>
        </div>
    );
};

export default Cart;