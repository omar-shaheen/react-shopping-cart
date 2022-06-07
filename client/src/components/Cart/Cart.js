import React from "react";
import "../../css/Cart/Cart.css";

export default function Cart(props) {
  return (
    <div className="cart-wrapper">
      <h4>There is {props.cartItems.length} Items in cart</h4>
      <hr />
      <h5> {props.cartItems.length === 0 ? 'Cart Is Empty' : ''} </h5>
      <div className="cart-items">
        {props.cartItems.map((item) => (
          <div className="item" key={item.id}>
            <div className="cart-img">
              <img src={item.imgUrl} alt="" />
            </div>
            <div className="cart-info">
              <div>
                <p> {item.title} </p>
                <p>QTY: { item.qty }</p>
                <p>Price: LE {item.price}</p>
              </div>
              <div className="cart-btn">
                <span onClick={() => props.removeFromCart(item)}>Remove</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
