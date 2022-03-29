import React, { useState, useEffect } from "react";
import ProductTable from "./components/ProductTable";
import SearchBar from "./components/SearchBar";

import "./app.css";
//	FilterableProductTable: đây chính là file chứa toàn bộ ứng dụng sau inde.js
const App = () => {
  const [products, setProducts] = useState([]);
  const [filterText, setFilterText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);

  const data = JSON.parse(localStorage.getItem("products"));

  useEffect(() => {
    setProducts(data);
  },[]);

  return (
    // oke. xây dựng xong cấu trúc thư mục và component.
    <div className="app">
      <SearchBar
        filterText={filterText}
        setFilterText={setFilterText}
        setInStockOnly={setInStockOnly}
        inStockOnly={inStockOnly}
      />
      <ProductTable
        products={products}
        filterText={filterText}
        inStockOnly={inStockOnly}
        setFilterText={setFilterText}
        setInStockOnly={setInStockOnly}
      />
    </div>
  );
};

export default App;
