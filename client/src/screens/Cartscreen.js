import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, deleteFromCart } from "../actions/cartAction";
// import Checkout from '../components/Checkout'

export default function Cartscreen() {
  const cartstate = useSelector((state) => state.cartReducer);
  const cartItems = cartstate.cartItems;

  var subtotal = cartItems.reduce((x, item) => x + item.price, 0);

  const dispatch = useDispatch();

  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-6 ">
          <h2 style={{ fontSize: "40px", margin: "13vh" }}>My Cart krish</h2>
          {cartItems.map((item) => {
            return (
              <div className="flex-container ">
                <div className="text-left m-1 w-100">
                  <h1>{item.name}</h1>
                  <h1>
                    Price : {item.quantity} * {item.price}
                  </h1>
                  <h1 style={{ display: "inline" }}>Quantity : </h1>
                  <i
                    className="fas fa-plus"
                    aria-hidden="true"
                    onClick={() => {
                      dispatch(addToCart(item, item.quantity + 1));
                    }}
                  ></i>
                  <b>{item.quantity}</b>
                  <i
                    className="fas fa-minus"
                    aria-hidden="true"
                    onClick={() => {
                      dispatch(addToCart(item, item.quantity - 1));
                    }}
                  ></i>
                </div>
                <div className="m-1 w-100">
                  <img
                    src={item.image}
                    style={{ height: "80px", width: "80px" }}
                  />
                </div>
                <div className="m-1 w-100">
                  <i
                    className="fas fa-trash mt-5"
                    aria-hidden="true"
                    onClick={() => {
                      dispatch(deleteFromCart(item));
                    }}
                  ></i>
                </div>
              </div>
            );
          })}
        </div>
        <div className="col-md-4 text-right">
          <h2 style={{ fontSize: "40px" }}>Subtotal : Rs {subtotal} /-</h2>
          {/* <Checkout subtotal={subtotal} /> */}
        </div>
      </div>
    </div>
  );
}
