import React from "react";

export default function ProductItem({ item, setStateModal }) {
  return (
    <div className="card h-100">
      <img
        src={item.image}
        className="card-img-top"
        alt={item.name}
        style={{ height: "200px", objectFit: "cover" }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{item.name}</h5>
        <p className="card-text text-danger fw-bold">{item.price} $</p>
        <button
          className="btn btn-primary mt-auto"
          onClick={() => setStateModal(item)}
        >
          View Details
        </button>
      </div>
    </div>
  );
}
