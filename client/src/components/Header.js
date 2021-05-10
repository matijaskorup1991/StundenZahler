import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../redux/actions/user';
import '../styles/header.scss';

const Header = () => {
  const dispatch = useDispatch();
  const logoutUser = () => {
    dispatch(logout());
  };
  return (
    <div className='header'>
      <h2>Username</h2>
      <div>
        <Link to='/months'>My Months</Link>
        <Link>Add Work Day</Link>
        <div onClick={logoutUser}>Logout</div>
      </div>
    </div>
  );
};

export default Header;
