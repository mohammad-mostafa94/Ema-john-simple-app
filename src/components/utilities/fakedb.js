// // use local storage as your db for now
// const addToDb = id => {
//   const exists = getDb();
//   let shopping_cart = {};
//   if (!exists) {
//     shopping_cart[id] = 1;
//   }
//   else {
//     shopping_cart = JSON.parse(exists);
//     if (shopping_cart[id]) {
//       const newCount = shopping_cart[id] + 1;
//       shopping_cart[id] = newCount;
//     }
//     else {
//       shopping_cart[id] = 1;
//     }
//   }
//   updateDb(shopping_cart);
// }

// const getDb = () => localStorage.getItem('shopping_cart');
// const updateDb = cart => {
//   localStorage.setItem('shopping_cart', JSON.stringify(cart));
// }

// const removeFromDb = id => {
//   const exists = getDb();
//   if (!exists) {

//   }
//   else {
//     const shopping_cart = JSON.parse(exists);
//     delete shopping_cart[id];
//     updateDb(shopping_cart);
//   }
// }

// const getStoredCart = () => {
//   const exists = getDb();
//   return exists ? JSON.parse(exists) : {};
// }

// const clearTheCart = () => {
//   localStorage.removeItem('shopping_cart');
// }

// export { addToDb, removeFromDb as deleteFromDb, clearTheCart, getStoredCart }

const getDb = () => localStorage.getItem('shopping_cart');
const updateDB = cart => {
  localStorage.setItem("shopping_cart",JSON.stringify(cart));
};
const getStoreCart = () =>{
  const exists = getDb();
  return exists ? JSON.parse(exists):{};
}

const clearTheCart = () =>{
  localStorage.removeItem('shopping_cart');
}

const addToCart = id =>{
  const exists = getDb();
  let shopping_cart={};
  if (!exists) {
    shopping_cart[id] = 1;
  }
  else{
    shopping_cart = JSON.parse(exists);
    if (shopping_cart[id]) {
      const newCount = shopping_cart[id] + 1;
      shopping_cart[id] = newCount;
    }
    else{
      shopping_cart[id] = 1;
    }
  }
  updateDB(shopping_cart);
}

const deleteFromDB = id =>{
  const exists = getDb();
  if (exists) {
    const shopping_cart = JSON.parse(exists);
    delete shopping_cart[id];
    updateDB(shopping_cart);
  }
}

export { getStoreCart, addToCart, deleteFromDB, clearTheCart };

