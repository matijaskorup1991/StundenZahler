import React, { useEffect, useState } from 'react';
import { getAllDays } from '../redux/actions/days';
import { useDispatch, useSelector } from 'react-redux';
import { createDay, deleteDay } from '../redux/actions/days';
import DaysTable from '../components/DaysTable';
import DaysTableData from '../components/DaysTableData';

import '../styles/days.scss';

const Days = () => {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.daysReducer);
  const { days } = data;

  console.log(days);

  useEffect(() => {
    dispatch(getAllDays());
  }, []);

  const [date, setDate] = useState('');
  const [hours, setHours] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createDay(date, hours));
  };

  const deleteDayHandler = (el) => {
    console.log(el);
    dispatch(deleteDay(el));
  };

  const saveToMonths = () => {};

  return (
    <div className='days'>
      <div>
        <form className='create-day-form' onSubmit={handleSubmit}>
          <div className='label'>DATUM:</div>

          <input
            type='date'
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />

          <div className='label'>HOURS:</div>

          <input
            type='number'
            value={hours}
            onChange={(e) => setHours(e.target.value)}
          />

          <input type='submit' value='SUBMIT' />
        </form>
      </div>
      <div>
        <div className='days-collection'>
          <DaysTable>
            {days.length > 0 &&
              days.map((el) => {
                return (
                  <DaysTableData
                    keyId={el.id}
                    day={el.day.substring(0, el.day.indexOf('T'))}
                    hour={el.hour}
                    deleteHandler={() => deleteDayHandler(el.id)}
                  />
                );
              })}
          </DaysTable>
        </div>
        <div className='days-add-to-months'>
          <div onClick={saveToMonths}>SAVE TO MONTHS</div>
        </div>
      </div>
    </div>
  );
};

export default Days;
