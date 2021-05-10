import React from 'react';
import '../styles/form.scss';

const Form = ({ children, onSubmit, formHeading }) => {
  return (
    <>
      <form onSubmit={onSubmit} className='register-login-form'>
        <h2>{formHeading}</h2>
        {children}
      </form>
    </>
  );
};

export default Form;
