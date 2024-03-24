import React from "react";

function GenderCheck({inputs,setInputs}) {

  function handleGenderChange(e){
      setInputs({
        ...inputs, 
         gender: e.target.value
      })
  }

  return (
    <div className="join mt-2">
        <input
          className="join-item btn"
          type="radio"
          name="options"
          aria-label="Male"
          value = "male"
          onChange={handleGenderChange}
        />
      <input
        className="join-item btn"
        type="radio"
        name="options"
        aria-label="Female"
        value= "female"
        onChange={handleGenderChange}
      />
    </div>
  );
}

export default GenderCheck;
