import React from "react";
import "./Input.css";

const Input = ({ label, value, type, onChange }) => {
  return (
    <div className='input'>
      <p>{label}</p>
      <input type={type} value={value} onChange={onChange} />
    </div>
  );
};

export default Input;
