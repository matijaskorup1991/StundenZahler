import React, { useEffect } from 'react';
import { getAllDays } from '../redux/actions/days';
import { useDispatch, useSelector } from 'react-redux';

const HomePage = () => {
  useEffect(() => {
    getAllDays();
  }, []);
  return <div>HomePage</div>;
};

export default HomePage;
