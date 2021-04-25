import React, { useState } from "react";
import Input from "../components/input/Input";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  return (
    <div className='register-page'>
      <form className='register-form'>
        <h2>Register</h2>
        <article>
          <Input label='Username' type='text' value={username} />
          <Input label='Email' type='email' value={email} />
          <Input label='Password' type='password' value={password} />
          <Input label='Repeat Password' type='password' value={password2} />
        </article>
      </form>
    </div>
  );
};

export default Register;
