import React, { useEffect, useState } from 'react';
import { getAllDays } from '../redux/actions/days';
import { useDispatch, useSelector } from 'react-redux';
import '../styles/days.scss';

const Days = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.daysReducer);
  const { days } = data;
  useEffect(() => {
    dispatch(getAllDays());
  }, []);

  const [date, setDate] = useState('');
  const [hours, setHours] = useState(0);

  const createDay = (e) => {
    e.preventDefault();
    console.log(date, hours);
  };

  const saveToMonths = () => {};

  return (
    <div className='days'>
      <div>
        <form className='create-day-form' onSubmit={createDay}>
          <div class='label'>DATUM:</div>
          <div>
            <input
              type='date'
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div class='label'>HOURS:</div>
          <div>
            <input
              type='number'
              value={hours}
              onChange={(e) => setHours(e.target.value)}
            />
          </div>
          <input type='submit' value='SUBMIT' />
        </form>
      </div>
      <div>
        <div className='days-collection'></div>
        <div className='days-add-to-months'>
          <div onClick={saveToMonths}>SAVE TO MONTHS</div>
        </div>
      </div>
    </div>
  );
};

export default Days;
