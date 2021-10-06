import { useEffect, useState } from "react";
import { getStoreCart } from "../../components/utilities/fakedb";

const useCart = products => {

    const [cart , setCart] = useState([]);

    useEffect(()=>{
        if (products.length) {
            const savedCart = getStoreCart();
            const storedCart = [];
            for (const key in savedCart) {
                const addedProduct = products.find(product =>product.key === key);
                if (addedProduct) {
                    const quantity = savedCart[key];
                    addedProduct.quantity = quantity;
                    storedCart.push(addedProduct);
                }
            }
            setCart(storedCart);
        }
    },[products]);
    return [cart, setCart];
}
export default useCart;