import React from 'react';
import './Product.css';
const Product = (props) => {
    // console.log(props.product);
    const {name,price, seller,stock,img} = props.product;
    return (
        <div className = "product">
            <div className="img">   
                <img src={img} alt={name} />
            </div>
            <div>
                <h2 className="product-name">{name}</h2>
                <h4>Price: {price}</h4>
                <p>By:{seller}</p>
                <p><small>only {stock} left in stock - order soon</small></p>
                <button
                 className="btn-regular"
                 onClick={() =>props.handleAddToCart(props.product)}
                >Add to cart</button>
            </div>
        </div>
    );
};

export default Product;