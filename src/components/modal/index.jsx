import React from "react";
import "./style.scss";
import BottomSheet from "../bottomsheet";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <>
      {window.innerWidth <= 768 && (
        <BottomSheet isOpen={isOpen} onClose={onClose}>
          {children}
        </BottomSheet>
      )}
      {window.innerWidth > 768 && (
        <div className="modal-overlay" onClick={onClose}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={onClose}>
              ×
            </button>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
