import React, { useState, useEffect } from 'react';
import { getAllMonths } from '../redux/actions/months';
import { useDispatch, useSelector } from 'react-redux';
import MonthHolder from '../components/MonthHolder';
import '../styles/months.scss';

const Months = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.monthsReducer);

  const [term, setTerm] = useState('');
  useEffect(() => {
    dispatch(getAllMonths());
  }, []);

  const { months } = data;

  console.log(months);

  const renderMonths = months.map((el) => {
    return (
      <MonthHolder
        date={el.created_at.substring(0, el.created_at.lastIndexOf('-'))}
      />
    );
  });

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
      <div className='months-content'>{months ? renderMonths : null}</div>
    </div>
  );
};

export default Months;
