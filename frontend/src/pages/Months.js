import React, { useEffect } from 'react';
import { getAllMonths } from '../redux/actions/months';
import { useDispatch, useSelector } from 'react-redux';

const Months = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllMonths());
  }, []);
  return <div></div>;
};

export default Months;
