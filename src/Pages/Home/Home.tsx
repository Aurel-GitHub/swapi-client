import Results from 'Layouts/Main/Results/Results';
import styles from './Home.module.css';

export default function Home(): JSX.Element {
  return (
    <div className={styles.homeContainer}>
      <Results />
    </div>
  );
}
