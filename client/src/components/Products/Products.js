import React from 'react'

function Products(props) {
  return (
    <div className="products-wrapper">
      {
        props.products.map(product=> {
          <div key={product.id}> {product.id} </div>
        })
      }
    </div>
  )
}
export default Products;