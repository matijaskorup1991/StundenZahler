import React, { useEffect } from 'react';
import { getAllMonths } from '../redux/actions/months';

const Months = () => {
  useEffect(() => {
    getAllMonths();
  }, []);
  return <div></div>;
};

export default Months;
