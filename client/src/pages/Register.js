import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../redux/actions/user';

const Register = () => {
  const dispatch = useDispatch();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

  const registerUser = (e) => {
    e.preventDefault();
    console.log(dispatch(register(username, email, password)));
  };

  return (
    <div className='register-page'>
      <form onSubmit={registerUser}>
        <input
          type='text'
          placeholder='Username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type='email'
          name='email'
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type='password'
          placeholder='Password'
          name='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type='password'
          placeholder='Password2'
          name='password2'
          value={password2}
          onChange={(e) => setPassword2(e.target.value)}
        />
        <input type='submit' value='submit' />
      </form>
    </div>
  );
};

export default Register;
