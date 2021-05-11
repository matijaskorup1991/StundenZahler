import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/landing.scss';

const Landing = () => {
  return (
    <div className='landing-div'>
      <h1>GET STARTED</h1>
      <div>
        <Link to='/register'>REGISTER</Link>
        <Link to='/login'>LOGIN</Link>
      </div>
    </div>
  );
};

export default Landing;
