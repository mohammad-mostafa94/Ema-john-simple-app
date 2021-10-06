import React from 'react';

const OrderItem = (props) => {

    const {name,price,quantity,key} = props.product;
    return (
        <div>
            <h3>Name: {name}</h3>
            <h4>Price: {price} </h4>
            <h4>Quantity : {quantity}</h4>
            <button onClick={()=>props.removeHandler(key)} className="">Remove</button>
        </div>
    );
};

export default OrderItem;