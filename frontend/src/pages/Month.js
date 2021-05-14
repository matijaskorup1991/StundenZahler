import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMonth } from '../redux/actions/months';

const Month = ({ match }) => {
  console.log(match);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMonth(match.params.id));
  }, []);
  return <div></div>;
};

export default Month;
