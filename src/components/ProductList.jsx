import React from "react";
import ProductItem from "./ProductItem";

export default function ProductList({ productsData, setStateModal }) {
  return (
    <div className="row">
      {productsData.map((product) => (
        <div className="col-md-4 mb-4" key={product.id}>
          <ProductItem item={product} setStateModal={setStateModal} />
        </div>
      ))}
    </div>
  );
}
