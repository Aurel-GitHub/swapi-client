import styles from './form-authentication.module.css';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSignIn } from 'react-auth-kit';

export default function FormAuthentication(): JSX.Element {
  const [errorMessage, setErrorMessage] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Authentication>();

  type Authentication = {
    firstname: string;
    password: string;
  };

  const signIn = useSignIn();

  const naviguate = useNavigate();

  const onSubmit: SubmitHandler<Authentication> = async (
    formValues: Authentication,
  ): Promise<void> => {
    try {
      const response = await axios.post('http://localhost:5000/login', formValues);
      console.log('response', response);
      signIn({
        token: response.data.token,
        expiresIn: 3600,
        tokenType: 'Bearer',
        authState: { firstname: formValues.firstname },
      });
      naviguate('/');
    } catch (error: any) {
      setErrorMessage(error?.response.data);
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
