import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/actions/user';
import Form from '../components/Form';

const Login = ({ history }) => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
    history.push('/home');
  };
  return (
    <div>
      <Form onSubmit={handleSubmit}>
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
        <input className='form-submit' type='submit' value='submit' />
      </Form>
    </div>
  );
};

export default Login;
