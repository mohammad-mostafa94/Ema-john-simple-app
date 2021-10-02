import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Rating from 'react-rating';
import './Product.css';


const Product = (props) => {
    // console.log(props.product);
    const {name,price, seller,stock,img,star} = props.product;

    const icon = <FontAwesomeIcon icon={faShoppingCart} />

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
                
                <Rating
                initialRating={star}
                    emptySymbol="far fa-star icon-container"
                    fullSymbol="fas fa-star icon-container"
                    readonly 
                >

                </Rating>
                    
                <br />

                <button
                 className="btn-regular"
                 onClick={
                     () =>props.handleAddToCart(props.product)
                     }
                >{icon}Add to cart</button>
            </div>
        </div>
    );
};

export default Product;