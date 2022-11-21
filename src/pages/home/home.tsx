import styles from './home.module.css';

export default function Home(): JSX.Element {
  return (
    <div className={styles.homeContainer}>
      <h3>Ici des résultats de recherches</h3>
    </div>
  );
}
