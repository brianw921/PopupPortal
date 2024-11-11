import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function PortalPopup() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);
  return (
    <div>
      <h1>My App</h1>
      <button onClick={openPopup}>Open Popup</button>

      <Popup isOpen={isPopupOpen} onClose={closePopup}>
        <h2>Popup Content</h2>
        <p>This is a simple popup window in React.</p>
      </Popup>
    </div>
  );
}

const Popup = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <div style={styles.overlay}>
      <div style={styles.popup}>
        <button style={styles.closeButton} onClick={onClose}>
          Close
        </button>
        <div>{children}</div>
      </div>
    </div>,
    document.getElementById('popup-root')
  );
};

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  popup: {
    width: '300px',
    padding: '20px',
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  },
  closeButton: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    background: 'none',
    border: 'none',
    fontSize: '16px',
    cursor: 'pointer',
  },
};

export default PortalPopup;
