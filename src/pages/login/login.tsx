import styles from './login.module.css';
import { useForm } from 'react-hook-form';

type LoginForm = {
  firstname: string;
  password: string;
};

export default function Login(): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  function onSubmit(data: LoginForm): void {
    return console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(() => onSubmit)} className={styles.formLogin}>
      <label className={styles.formLabel}>Prénom</label>
      <input className={styles.formInput} {...register('firstname', { required: true })} />
      {errors.exampleRequired && <span>Ce champs est requis</span>}

      <label className={styles.formLabel}>Mot de passe</label>
      <input
        type='password'
        className={styles.formInput}
        {...register('exampleRequired', { required: true })}
      />
      {errors.exampleRequired && <span>Ce champs est requis</span>}

      <input type='submit' className={styles.formBtn} />
    </form>
  );
}
