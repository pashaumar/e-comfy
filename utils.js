const getProductById = (id) => {
  return allProducts.filter((product) => {
    return product.id === id;
  })[0];
};

const isItemAlreadyInCart = (id, cartItems) => {
  return !!cartItems.find((product) => {
    return product.id === id;
  });
};

const increaseItemCount = (id, cartItems) => {
  return cartItems.map((product) => {
    if (product.id === id) {
      return {
        ...product,
        quantity: product.quantity + 1,
      };
    }
    return product;
  });
};

const getCartQuantity = (cartItems) => {
  let quantity = 0;
  for (const item of cartItems) {
    quantity += item.quantity;
  }
  return quantity;
};
