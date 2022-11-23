import styles from './FormAuthentication.module.css';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useState } from 'react';
import axios, { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSignIn } from 'react-auth-kit';
import { useDispatch } from 'react-redux';
import { IAuthentication } from '../../../utils/interfaces';
import { setUserConnected } from '../../../app/feature/UserSlice';
import { Authentication } from '../../../utils/types/Index';

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
    } catch (error: AxiosError | any) {
      if (axios.isAxiosError(error)) {
        setErrorMessage(error.response?.data);
      } else {
        setErrorMessage('Prénom ou Mot de passe incorrect');
      }
    }
  };

  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Se connecter</h1>
      <form className={styles.formLogin} onSubmit={handleSubmit(onSubmit)}>
        <label className={styles.formLabel}>Prénom</label>
        <input
          className={styles.formInput}
          {...register('firstname', {
            required: true,
          })}
        />
        {errors.firstname && <small className={styles.textDanger}>Veuillez saisir un prénom</small>}

        <label className={styles.formLabel}>Mot de passe</label>
        <input
          type='password'
          className={styles.formInput}
          {...register('password', {
            required: true,
          })}
        />
        {errors.password && (
          <small className={styles.textDanger}>Veuillez saisir un mot de passe</small>
        )}

        {errorMessage && <small className={styles.textDanger}>{errorMessage}</small>}
        <input type='submit' className={styles.formBtn} />
      </form>
    </>
  );
}
