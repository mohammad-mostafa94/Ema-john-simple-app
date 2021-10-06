import React from 'react';
import { useHistory } from 'react-router-dom';
import useCart from '../../Hooks/UseCart/UseCart';
import useProducts from '../../Hooks/useProducts/useProducts';
import Cart from '../Cart/Cart';
import OrderItem from '../OrderItem/OrderItem';
import { clearTheCart, deleteFromDB } from '../utilities/fakedb';

const Order = () => {

    const history = useHistory();

    const [products] = useProducts();
    const [cart, setCart] = useCart(products);

    const removeHandler = key => {
        const newCart = cart.filter(product=> product.key !== key);
        setCart(newCart);
        deleteFromDB(key);
    };

    const handlePlaceOrder = () =>{
        history.push("/placeOrder");
        setCart([]); // for UI cart empty
        clearTheCart();// empty for local Storage
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
                <Cart cart = {cart}>
                    
                        <button onClick={handlePlaceOrder} className="btn-regular">Place Order</button>

                </Cart>
            </div>
        </div>
        </div>
    );
};

export default Order;