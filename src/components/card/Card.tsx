import { CardProps } from '../../utils/types/Index';
import styles from './Card.module.css';

export default function Card(props: CardProps): JSX.Element {
  return (
    <div className={styles.card}>
      <span className={styles.cardSpan}>{props.name}</span>
      <button className={styles.cardButtonDetails}>Détails</button>
    </div>
  );
}
