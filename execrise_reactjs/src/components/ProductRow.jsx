import React from "react";

const ProductRow = ({ product }) => {
  // const product = this.props.product;
  const name = product.stocked ? (
    product.name
  ) : (
    <span style={{ color: "red" }}>{product.name}</span>
  );
  return (
    <>
      <tr>
        <td>{name}</td>
        <td>price</td>
      </tr>
    </>
  );
};

export default ProductRow;
