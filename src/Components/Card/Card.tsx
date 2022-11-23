import styles from './Card.module.css';
import { Link } from 'react-router-dom';
import { ICardProps } from 'Services/Utils/Interfaces/index';
import { useDispatch } from 'react-redux';
import { setDetail } from 'Services/Feature/DetailSlice';
import axios, { AxiosError, AxiosResponse } from 'axios';

export default function Card({ cardDetail }: ICardProps): JSX.Element {
  const defaultName: string | undefined = cardDetail['name'] || cardDetail['title'];

  const dispatch = useDispatch();

  async function selectDetail(): Promise<void> {
    try {
      const uri: string = 'http://localhost:5000' + cardDetail.url.slice(21);
      console.log('sdfd', uri);
      const response: AxiosResponse = await axios.get(uri.trim().toLocaleLowerCase());
      console.log('>>>>>>>', response.data);
      dispatch(setDetail(response.data));
    } catch (error: AxiosError | any) {
      throw new Error('error', error);
    }
  }
  return (
    <div className={styles.card}>
      <span className={styles.cardSpan}>{defaultName}</span>
      <Link to={`${cardDetail.url.slice(21)}`}>
        <button className={styles.cardButtonDetails}>Détails</button>
      </Link>
    </div>
  );
}
