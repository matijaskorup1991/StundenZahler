import React from "react";

const Input = ({ label, value, type, onChange }) => {
  return (
    <React.Fragment>
      <p>{label}</p>
      <input type={type} value={value} onChange={onChange} />
    </React.Fragment>
  );
};

export default Input;
