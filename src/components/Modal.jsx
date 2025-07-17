import React from "react";
import "./Modal.css"; // Có thể tuỳ chọn thêm CSS nếu muốn

export default function Modal({ content, onClose }) {
  if (!content) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="btn-close float-end" onClick={onClose}></button>
        <div className="row">
          <div className="col-md-5">
            <img
              src={content.image}
              alt={content.name}
              className="img-fluid"
            />
          </div>
          <div className="col-md-7">
            <h4>{content.name}</h4>
            <p className="text-danger fw-bold">{content.price} $</p>
            <p>{content.description}</p>
            <button className="btn btn-success">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}
