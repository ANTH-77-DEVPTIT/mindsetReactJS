import React from "react";

const SearchBar = ({
  filterText,
  inStockOnly,
  setFilterText,
  setInStockOnly,
}) => {
  const handleChangeValue = (e) => {
    setFilterText(e.target.value);
  };

  const handleChangeChecked = (e) => {
    setInStockOnly(e.target.checked);
  };
  return (
    <form className="form">
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => handleChangeValue(e)}
        value={filterText}
      />
      <p>
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={(e) => handleChangeChecked(e)}
        />{" "}
        Only show products in stock
      </p>
    </form>
  );
};

export default SearchBar;
