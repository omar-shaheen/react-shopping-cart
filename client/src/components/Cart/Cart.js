import React, { useState } from "react";
import "../../css/Cart/Cart.css";
import Checkout from "../CheckoutForm/Checkout";

export default function Cart(props) {
  const [showForm, setShowForm] = useState(false);

  const [value, setValue] = useState("");

  const submitOrder = (e) => {
    e.preventDefault();

    const order = {
      name: value.name,
      email: value.email,
    };
    console.log(order);
  };

  const handleChange = (e) => {
    setValue((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="cart-wrapper">
      <h4>There is {props.cartItems.length} Items in cart</h4>
      <hr />
      <h5> {props.cartItems.length === 0 ? "Cart Is Empty" : ""} </h5>
      <div className="cart-items">
        {props.cartItems.map((item) => (
          <div className="item" key={item.id}>
            <div className="cart-img">
              <img src={item.imgUrl} alt="" />
            </div>
            <div className="cart-info">
              <div>
                <p> {item.title} </p>
                <p>QTY: {item.qty}</p>
                <p>Price: LE {item.price}</p>
              </div>
              <div className="cart-btn">
                <span onClick={() => props.removeFromCart(item)}>Remove</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr />

      {props.cartItems.length !== 0 ? (
        <div className="cart-footer">
          <div className="total">
            Total Price: LE
            {props.cartItems.reduce((acc, p) => {
              return acc + p.price;
            }, 0)}
          </div>
          <button onClick={() => setShowForm(true)}>Select Product</button>
        </div>
      ) : (
        ""
      )}

      {/* Checkout From */}
      <Checkout
        showForm={showForm}
        submitOrder={submitOrder}
        setShowForm={setShowForm}
        handleChange={handleChange}
      />
    </div>
  );
}
