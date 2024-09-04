import React, { useState } from 'react';

function Popup() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSubmit = () => {
    // Do something with the input value
    console.log(inputValue);
    handleClose();
  };

  return (
    <div>
      <button onClick={handleOpen}>Open Prompt</button>

      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <p>Enter your name:</p>
            <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <button onClick={handleSubmit}>Submit</button>
            <button onClick={handleClose}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Popup;