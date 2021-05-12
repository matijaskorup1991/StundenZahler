import React, { useEffect, useState } from 'react';
import { getAllDays } from '../redux/actions/days';
import { useDispatch, useSelector } from 'react-redux';
import { createDay, deleteDay, updateDay } from '../redux/actions/days';
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
  const [activeUpdate, setActiveUpdate] = useState(false);

  const formatDate = (el) => {
    console.log(new Date(el.day).toLocaleDateString());
    return new Date(el.day).toLocaleDateString();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setActiveUpdate(false);
    dispatch(createDay(date, hours));
    console.log(date);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    setActiveUpdate(false);
  };

  const deleteDayHandler = (id) => {
    console.log(id);
    dispatch(deleteDay(id));
  };

  const updateDayHandler = (el) => {
    setActiveUpdate(true);
    console.log(new Date(el.day).toISOString().split('T')[0], date);
    setDate(new Date(el.day).toISOString().split('T')[0]);
    setHours(el.hour);
  };

  const saveToMonths = () => {};

  const checkDays = () => {
    return days.some(
      (el) => new Date(el.day).toISOString().split('T')[0] == date
    );
  };

  return (
    <div className='days'>
      <div>
        <form
          className='create-day-form'
          onSubmit={
            !activeUpdate
              ? handleSubmit
              : checkDays()
              ? handleUpdate
              : handleSubmit
          }
        >
          <div className='label'>DATUM:</div>
          <input
            type='date'
            value={date}
            required
            onChange={(e) => setDate(e.target.value)}
          />
          <div className='label'>HOURS:</div>
          <input
            type='number'
            value={hours}
            required
            onChange={(e) => setHours(e.target.value)}
          />
          <input
            type='submit'
            value={!activeUpdate ? 'SUBMIT' : checkDays() ? 'UPDATE' : 'SUBMIT'}
          />
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
                    day={formatDate(el)}
                    hour={el.hour}
                    deleteHandler={() => deleteDayHandler(el.id)}
                    updateHandler={() => updateDayHandler(el)}
                  ></DaysTableData>
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
