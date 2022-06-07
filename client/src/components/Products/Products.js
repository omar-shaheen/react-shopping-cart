import React, { useState } from "react";
import "../../css/Products/Products.css";

import ProductModal from "./ProductModal";

function Products(props) {
  // console.log(props);

  const [product, setProduct] = useState("");

  const openModal = (product) => {
    setProduct(product);
  };
  const closeModal = (product) => {
    setProduct(false);
  };

  return (
    <div className="products-wrapper">
      {props.products.map((product) => (
        <div key={product.id} className="product-item">
          <a href="#" onClick={() => openModal(product)}>
            <img src={product.imgUrl} alt={product.title} />
          </a>
          <div className="product-desc">
            <h4> {product.title} </h4>
            <p> LE {product.price} </p>
          </div>
          <button onClick={() => props.addToCart(product)}> Add To Cart </button>
        </div>
      ))}

      <ProductModal product={product} closeModal={closeModal} />
    </div>
  );
}
export default Products;
