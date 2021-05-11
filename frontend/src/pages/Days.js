import React, { useEffect, useState } from 'react';
import { getAllDays } from '../redux/actions/days';
import { useDispatch, useSelector } from 'react-redux';
import { createDay } from '../redux/actions/days';
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
          <table>
            <thead>
              <tr>
                <td>DATE:</td>
                <td>HOURS:</td>
              </tr>
            </thead>
            {days.length > 0 &&
              days.map(({ id, day, hour }) => {
                return (
                  <tr key={id} className='days-to-save'>
                    <td> {day.substring(0, day.indexOf('T'))}</td>
                    <td> {hour}</td>
                    <td>
                      <div className='days-update'>UPDATE</div>
                    </td>
                    <td>
                      <div className='days-delete'>DELETE</div>
                    </td>
                  </tr>
                );
              })}
          </table>
        </div>
        <div className='days-add-to-months'>
          <div onClick={saveToMonths}>SAVE TO MONTHS</div>
        </div>
      </div>
    </div>
  );
};

export default Days;
