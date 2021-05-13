import React, { useState, useEffect } from 'react';
import { getAllMonths } from '../redux/actions/months';
import { useDispatch, useSelector } from 'react-redux';
import '../styles/months.scss';

const Months = () => {
  const dispatch = useDispatch();

  const [term, setTerm] = useState('');
  useEffect(() => {
    dispatch(getAllMonths());
  }, []);
  return (
    <div>
      <div className='months-search'>
        <input
          id='search'
          type='text'
          onChange={(e) => setTerm(e.target.value)}
          value={term}
          placeholder='Search By Date'
        />
      </div>
    </div>
  );
};

export default Months;
