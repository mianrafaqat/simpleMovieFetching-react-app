import React, { useState } from "react";

const Card = ({ title, description }) => {
  const [open, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };
  return (
    <>
      <div
        style={{ backgroundColor: "green", color: "white" }}
        onClick={openModal}
      >
        <h2>{title}</h2>
        <p>{description}</p>
      </div>

      {open && (
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
          <button onClick={closeModal}>Close</button>
        </div>
      )}
    </>
  );
};

export default Card;
