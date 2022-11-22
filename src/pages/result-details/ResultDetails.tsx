import styles from './ResultDetails.module.css';
import { useParams } from 'react-router-dom';

export default function ResultDetails(): JSX.Element {
  const params = useParams();
  console.log('params', params);
  return (
    <div className={styles.resultDetailsContainer}>
      <span> details !!!!</span>
    </div>
  );
}
