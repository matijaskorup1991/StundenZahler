import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import '../styles/header.scss';

const Header = () => {
  return (
    <div className='header'>
      <h2>Username</h2>
      <div>
        <Link to='/months'>My Months</Link>
        <Link>Add Work Day</Link>
        <div>Logout</div>
      </div>
    </div>
  );
};

export default Header;
