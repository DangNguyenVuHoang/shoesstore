
import React, { useState, useEffect } from "react";
import './App.css'
import ProductList from "./components/ProductList";
import Modal from "./components/Modal";
import productsData from "./data/products.json";


export default function App() {
  const [products, setProducts] = useState([]);
  const [productDetail, setProductDetail] = useState(null);

  useEffect(() => {
    // Giả sử data đã import từ file JSON
    setProducts(productsData);
  }, []);

  const handleShowModal = (product) => {
    setProductDetail(product);
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Shoes Shop</h2>

      <ProductList productsData={products} setStateModal={handleShowModal} />

      {productDetail && (
        <Modal content={productDetail} onClose={() => setProductDetail(null)} />
      )}
    </div>
  );
}
