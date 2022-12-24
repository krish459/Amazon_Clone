export const addToCart = (item) => (dispatch, getState) => {
  var cartItem = {
    name: item.title,
    _id: item._id,
    image: item.image,
    quantity: Number(1),
    prices: item.price,
  };

  if (cartItem.quantity > 10) {
    alert("You can not add more than 10 quatities");
  } else {
    if (cartItem.quantity <= 0) {
      dispatch({ type: "DELETE_FROM_CART", payload: item });
    } else {
      dispatch({ type: "ADD_TO_CART", payload: cartItem });
    }
  }

  const cartItems = getState().cartReducer.cartItems;
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

export const deleteFromCart = (item) => (dispatch, getState) => {
  const cartItems = getState().cartReducer.cartItems;
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};
