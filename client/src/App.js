import React, { useState } from "react";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

// import { words } from './words';
import data from "./data.json";

import Products from "./components/Products/Products";
import Filter from "./components/Filter/Filter";

function App() {
  // console.log(data);

  const [products, setProducts] = useState(data);
  // console.log(products);

  const [sort, setSort] = useState("");
  const [size, setSize] = useState("");

  const handleFilterBySize = (e) => {
    // console.log(e.target.value);
    setSize(e.target.value);

    if (e.target.value == "ALL") {
      setProducts(data);
    } else {
      let productsClone = [...products];
      // console.log(productsClone);
      let newProducts = productsClone.filter(p=> p.sizes.indexOf(e.target.value) != -1);
      setProducts(newProducts)
    }
  };

  const handleFilterByOrder = (e) => {
    // console.log(e.target.value);
    let order = e.target.value;
    setSort(order);

    let productsClone = [...products];
    let newProducts = productsClone.sort((a, b)=> {
      if (order == "lowest")  {
        return a.price - b.price;
      } else if (order == "highest") {
        return b.price - a.price;
      } else {
        return a.id < b.id ? 1 : -1
      }
    });
    // console.log(newProducts);
    setProducts(newProducts)
  };

  return (
    <div className="layout">
      <Header />

      <main>
        <div className="wrapper">
          <Products products={products} />
          <Filter
            sort={sort}
            size={size}
            handleFilterByOrder={handleFilterByOrder}
            handleFilterBySize={handleFilterBySize}
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
