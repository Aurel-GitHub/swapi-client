import styles from './FormAuthentication.module.css';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useState } from 'react';
import axios, { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSignIn } from 'react-auth-kit';
import { useDispatch } from 'react-redux';
import { IAuthentication } from 'Services/Utils/Interfaces';
import { setUserConnected } from 'Services/Feature/UserSlice';
import { Authentication } from 'Services/Utils/Types/Index';

export default function FormAuthentication(): JSX.Element {
  const [errorMessage, setErrorMessage] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Authentication>();

  const signIn = useSignIn();

  const dispatch = useDispatch();

  const naviguate = useNavigate();

  const onSubmit: SubmitHandler<Authentication> = async (
    formValues: Authentication,
  ): Promise<void> => {
    try {
      const response = await axios.post('http://localhost:5000/login', formValues);
      const { token, firstname }: IAuthentication = response.data;
      signIn({
        token: token,
        expiresIn: 3600,
        tokenType: 'Bearer',
        authState: { firstname: firstname },
      });
      dispatch(setUserConnected(firstname));
      naviguate('/');
    } catch (error: AxiosError | unknown) {
      if (axios.isAxiosError(error)) {
        setErrorMessage(error.response?.data);
      } else {
        setErrorMessage('Incorrect first name or password');
      }
    }
  };

  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Login</h1>
      <form className={styles.formLogin} onSubmit={handleSubmit(onSubmit)}>
        <label className={styles.formLabel}>First name</label>
        <input
          className={styles.formInput}
          {...register('firstname', {
            required: true,
          })}
        />
        {errors.firstname && <small className={styles.textDanger}>Please enter a First name</small>}

        <label className={styles.formLabel}>Password</label>
        <input
          type='password'
          className={styles.formInput}
          {...register('password', {
            required: true,
          })}
        />
        {errors.password && <small className={styles.textDanger}>Please enter a First name</small>}

        {errorMessage && <small className={styles.textDanger}>{errorMessage}</small>}
        <button type='submit' className={styles.formBtn}>
          Send
        </button>
      </form>
    </>
  );
}
