import styles from './Card.module.css';
import { Link } from 'react-router-dom';
import { ICardProps } from '../../utils/interfaces';

export default function Card({ cardDetail }: ICardProps): JSX.Element {
  const defaultName: string | undefined = cardDetail['name'] || cardDetail['title'];
  return (
    <div className={styles.card}>
      <span className={styles.cardSpan}>{defaultName}</span>
      <Link to={`${cardDetail.url.slice(21)}`}>
        <button className={styles.cardButtonDetails}>Détails</button>
      </Link>
    </div>
  );
}
