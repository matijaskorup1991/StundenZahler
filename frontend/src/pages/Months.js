import React, { useState, useEffect } from 'react';
import { getAllMonths, deleteMonth } from '../redux/actions/months';
import { useDispatch, useSelector } from 'react-redux';
import MonthHolder from '../components/MonthHolder';
import Loader from '../components/Loader';
import ErrorMessage from '../components/ErrorMessage';
import '../styles/months.scss';

const Months = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.monthsReducer);
  const errorMessage = useSelector((state) => state.alertReducer);

  const { months } = data;

  const [term, setTerm] = useState('');

  const handleDelete = (id) => {
    dispatch(deleteMonth(id));
  };

  useEffect(() => {
    dispatch(getAllMonths());
  }, [dispatch]);

  const formatDate = (el) =>
    el.created_at.substring(0, el.created_at.lastIndexOf('-'));

  const renderMonths = months ? (
    months.map((el) => {
      return (
        <MonthHolder
          keyId={el.id}
          linkTo={`/months/${el.id}`}
          date={formatDate(el)}
          deleteHandler={() => handleDelete(el.id)}
        />
      );
    })
  ) : (
    <Loader />
  );

  const filteredMonths = months.filter((el) => el.created_at.includes(term));

  const showFilteredMonths = months ? (
    filteredMonths.map((el) => {
      return (
        <MonthHolder
          keyId={el.id}
          date={formatDate(el)}
          deleteHandler={() => handleDelete(el.id)}
        />
      );
    })
  ) : (
    <Loader />
  );

  let alertMsg = errorMessage.message && (
    <ErrorMessage classMsg='alert' message={errorMessage.message} />
  );

  return (
    <div>
      <div className='months-search'>
        {alertMsg}
        <input
          id='search'
          type='text'
          onChange={(e) => setTerm(e.target.value)}
          value={term}
          placeholder='Search By Date'
        />
      </div>
      <div className='months-content'>
        {term ? showFilteredMonths : renderMonths}
      </div>
    </div>
  );
};

export default Months;
