import React from "react";
import Modal from "react-modal";

function ProductModal(props) {
  const { product, closeModal } = props;
  return (
    <Modal isOpen={product} onRequestClose={closeModal}>
      <span onClick={closeModal} className="close-icon">
        &times;
      </span>
      <div className="products-info">
        <img src={product.imgUrl} alt={product.title} />
        <h5> {product.title} </h5>
        <p> LE {product.desc} </p>
      </div>
    </Modal>
  );
}
export default ProductModal;
