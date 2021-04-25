import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className='landing-div'>
      <h1>Time Traking</h1>
      <div className='landing-container'>
        <Link to='/register'>Register</Link>
        <Link to='/login'>Log in</Link>
      </div>
    </div>
  );
};

export default Landing;
