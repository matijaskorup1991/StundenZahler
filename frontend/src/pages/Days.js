import React, { useEffect, useState } from 'react';
import { getAllDays } from '../redux/actions/days';
import { useDispatch, useSelector } from 'react-redux';
import { createDay, deleteDay, updateDay } from '../redux/actions/days';
import { saveToMonth } from '../redux/actions/months';
import DaysTable from '../components/DaysTable';
import DaysTableData from '../components/DaysTableData';

import '../styles/days.scss';

const Days = () => {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.daysReducer);
  const { days } = data;

  const [date, setDate] = useState('');
  const [hours, setHours] = useState(0);
  const [activeUpdate, setActiveUpdate] = useState(false);
  const [idToUpdate, setIdToUpdate] = useState('');

  useEffect(() => {
    dispatch(getAllDays());
  }, [dispatch]);

  const formatDate = (el) => {
    return new Date(el.day).toISOString().split('T')[0];
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setActiveUpdate(false);
    dispatch(createDay(date, hours));
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateDay(idToUpdate, date, hours));
    setActiveUpdate(false);
    setIdToUpdate('');
    setDate('');
  };

  const deleteDayHandler = (id) => {
    console.log(id);
    dispatch(deleteDay(id));
  };

  const updateDayHandler = (el) => {
    setActiveUpdate(true);
    setDate(formatDate(el));
    setHours(el.hour);
    setIdToUpdate(el.id);
  };

  const saveToMonths = () => {
    if (window.confirm('Are you sure? This cannot be undone')) {
      dispatch(saveToMonth(days));
    }
  };

  const checkDays = () => {
    return days.some((el) => formatDate(el) == date);
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
