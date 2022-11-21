import styles from './form-authentication.module.css';
import { useForm, SubmitHandler } from 'react-hook-form';

export default function FormAuthentication(): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Authentication>();

  type Authentication = {
    firstname: string;
    password: string;
  };

  const onSubmit: SubmitHandler<Authentication> = async (data): Promise<void> => console.log(data);

  return (
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
      <input type='submit' className={styles.formBtn} />
    </form>
  );
}
