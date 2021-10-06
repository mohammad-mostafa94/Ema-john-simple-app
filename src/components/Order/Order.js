import React from 'react';
import useCart from '../../Hooks/UseCart/UseCart';
import useProducts from '../../Hooks/useProducts/useProducts';
import Cart from '../Cart/Cart';
import OrderItem from '../OrderItem/OrderItem';
import { deleteFromDB } from '../utilities/fakedb';

const Order = () => {

    const [products] = useProducts();
    const [cart, setCart] = useCart(products);

    const removeHandler = key => {
        const newCart = cart.filter(product=> product.key !== key);
        setCart(newCart);


        deleteFromDB(key);


        
    }
    return (
        <div>
           <div className="shop-container">
            <div className="product-container">
                {
                   cart.map(product=> <OrderItem
                   key = {product.key}
                   removeHandler = {removeHandler}
                    product = {product}></OrderItem>)
                }
            </div>
            <div className="cart-container">
                {/* <Cart cart = {cart}></Cart> */}
                <Cart cart = {cart}></Cart>
            </div>
        </div>
        </div>
    );
};

export default Order;