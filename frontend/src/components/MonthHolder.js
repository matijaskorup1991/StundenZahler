import React from 'react';
import '../styles/monthHolder.scss';
import { Link } from 'react-router-dom';

const MonthHolder = ({ date, linkTo, deleteHandler }) => {
  return (
    <div className='month-holder'>
      <h3>{date}</h3>
      <div className='month-holder-controls'>
        <Link to={linkTo}>SHOW</Link>
        <div onClick={deleteHandler}>DELETE</div>
      </div>
    </div>
  );
};

export default MonthHolder;
