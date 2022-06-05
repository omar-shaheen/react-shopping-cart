import React from "react";
import "../../css/Filter/Filter.css";

export default function Filter(props) {
  return (
    <div className="filter-wrapper">
      <h2 className="filter-title"> Filter </h2>
      <div className="num-of-products"> Number of products 4 </div>
      <hr />
      <div className="filter-by-size">
        <span>Filter</span>
        <select
          className="filter-select"
          value={props.size}
          onChange={props.handleFilterBySize}
        >
          <option value="ALL">All</option>
          <option value="XL">XL</option>
          <option value="S">S</option>
          <option value="L">L</option>
          <option value="M">M</option>
        </select>
      </div>
      <div className="filter-by-size">
        <span>Order</span>
        <select
          className="filter-select"
          value={props.sort}
          onChange={props.handleFilterByOrder}
        >
          <option value="latest">Latest</option>
          <option value="highest">Highest</option>
          <option value="lowest">Lowest</option>
        </select>
      </div>
    </div>
  );
}
