import React from "react";
import "../../css/Products/Products.css";

function Products(props) {
  // console.log(props);
  return (
    <div className="products-wrapper">
      {props.products.map((product) => (
        <div key={product.id} className="product-item">
          <img src={product.imgUrl} alt={product.title} />
          <div className="product-desc">
            <p> {product.title} </p>
            <span> {product.price} </span>
          </div>
          <button> Add To Cart </button>
        </div>
      ))}
    </div>
  );
}
export default Products;
