import React from "react";

const ProductCategoryRow = ({ productCategory }) => {
  return (
    <tr>
      <th colSpan="2">{productCategory}</th>
    </tr>
  );
};

export default ProductCategoryRow;
