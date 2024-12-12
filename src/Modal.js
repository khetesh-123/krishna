import React from "react";
import "./Modal.css"; // Make sure to style your modal

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close-btn" onClick={onClose}>
          &times; {/* This renders the 'X' symbol */}
        </button>
        <h2>Important Information</h2>
        <p>Don't miss out on the latest updates about Nashik!</p>
      </div>
    </div>
  );
};

export default Modal;
