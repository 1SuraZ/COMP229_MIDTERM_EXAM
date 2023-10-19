// src/SignUpUser.js
import React from 'react';
import { useForm } from 'react-hook-form';

const SignUpUser = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    if (data.password !== data.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    alert(JSON.stringify(data, null, 2));
    console.log('Form Data:', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        First Name:
        <input {...register('firstName', { required: true })} />
        {errors.firstName && <span>This field is required</span>}
      </label>
      <label>
        Last Name:
        <input {...register('lastName', { required: true })} />
        {errors.lastName && <span>This field is required</span>}
      </label>
      <label>
        User Name:
        <input {...register('userName', { required: true })} />
        {errors.userName && <span>This field is required</span>}
      </label>
      <label>
        Email:
        <input {...register('email', { required: true, pattern: /^\S+@\S+$/i })} />
        {errors.email && <span>This field is required and must be a valid email</span>}
      </label>
      <label>
        Password:
        <input type="password" {...register('password', { required: true })} />
        {errors.password && <span>This field is required</span>}
      </label>
      <label>
        Confirm Password:
        <input type="password" {...register('confirmPassword', { required: true })} />
        {errors.confirmPassword && <span>This field is required</span>}
      </label>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default SignUpUser;
