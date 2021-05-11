import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { register } from '../redux/actions/user';
import Form from '../components/Form';
import '../styles/register.scss';

const Register = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

  const registerUser = (e) => {
    e.preventDefault();
    dispatch(register(username, email, password, history));
  };

  return (
    <div className='register-page'>
      <Form onSubmit={registerUser} formHeading='CREATE ACCOUNT'>
        <input
          type='text'
          placeholder='Username'
          value={username}
          required
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type='email'
          name='email'
          placeholder='Email'
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type='password'
          placeholder='Password'
          name='password'
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type='password'
          placeholder='Repeat your Password'
          name='password2'
          value={password2}
          required
          onChange={(e) => setPassword2(e.target.value)}
        />
        <input className='form-submit' type='submit' value='SUBMIT' />
        <p>
          Have already an account?{' '}
          <span>
            <Link to='/login'>Login here</Link>
          </span>
        </p>
      </Form>
    </div>
  );
};

export default Register;
