import React from "react";

function GenderCheck() {
  return (
    <div className="join mt-2">
      <input
        className="join-item btn"
        type="radio"
        name="options"
        aria-label="Male"
      />
      <input
        className="join-item btn"
        type="radio"
        name="options"
        aria-label="Female"
      />
      <input
        className="join-item btn"
        type="radio"
        name="options"
        aria-label="Transgender"
      />
    </div>
  );
}

export default GenderCheck;
