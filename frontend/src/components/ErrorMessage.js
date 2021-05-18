import React from 'react';
import '../styles/errorMessage.scss';

const ErrorMessage = ({ classMsg, message }) => {
  return <div className={`error-message ${classMsg}`}>{message}</div>;
};

export default ErrorMessage;
