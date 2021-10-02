import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import { addToCart, getStoreCart } from '../utilities/fakedb';
import "./Shop.css";
const Shop = () => {
    const [products,setProducts] = useState([]);
    const [cart , setCart] = useState([]);

    const [displayProduct,setDisplayProduct] = useState([]);

    // JSON file load here
    useEffect( () => {
        fetch("./products.JSON")
        .then(res => res.json())
        .then(data =>{
            setProducts(data);
            setDisplayProduct(data);
        } )
    },[]);

    // localStorage data load here
    useEffect(()=>{
        
        if (products.length) {
            const saveData = getStoreCart();
            const storeCart = [];
            for (const key in saveData) {
                const addedProduct = products.find(product=> product.key === key);

                if (addedProduct) {
                    const quantity = saveData[key];
                    addedProduct.quantity = quantity;
                    storeCart.push(addedProduct);
                }
                
            }
            setCart(storeCart);
        }
        // console.log(saveData);
    },[products]);

    const handleAddToCart = product =>{
        const newCart = [...cart, product];
        setCart(newCart);

        // add data to Local storage
        addToCart(product.key);
    }

    const searchHandle = event =>{
        const searchProduct = event.target.value;
        const matchedProduct = products.filter(product => product.name.toLowerCase().includes(searchProduct.toLowerCase()));
        setDisplayProduct(matchedProduct);
    }

    return (
        <>
            <div className="search-container">
                <input type="text"  placeholder= 'Search product'
                    onChange ={searchHandle}
                />
                
            </div>
            <div className="shop-container">
            <div className="product-container">
                {
                    displayProduct.map((product) =><Product
                    key={product.key}
                    product ={product}
                    handleAddToCart = {handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="product-container">
                <Cart cart = {cart}></Cart>
            </div>
        </div>
        </>
    );
};

export default Shop;