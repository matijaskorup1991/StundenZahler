import React, { useEffect } from 'react';
import { getAllDays } from '../redux/actions/days';
import { useDispatch, useSelector } from 'react-redux';
import '../styles/days.scss';

const Days = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.daysReducer);
  const { days } = data;
  useEffect(() => {
    dispatch(getAllDays());
  }, [days]);
  return (
    <div className='days'>
      <div>
        <form className='create-day-form'></form>
      </div>
      <div>Test</div>
    </div>
  );
};

export default Days;
