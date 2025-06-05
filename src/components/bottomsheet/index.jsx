import React, { useEffect } from "react";
import "./style.scss";

const BottomSheet = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="sheet-overlay" onClick={onClose}>
      <div className="sheet-container" onClick={(e) => e.stopPropagation()}>
        <div className="sheet-header">
          <div className="sheet-drag-indicator" />
        </div>
        <div className="sheet-content">{children}</div>
      </div>
    </div>
  );
};

export default BottomSheet;
