import styles from './ResultDetails.module.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios, { AxiosError, AxiosResponse } from 'axios';

export default function ResultDetails(): JSX.Element {
  const params = useParams();
  console.log('params', params);

  const [details, setDetails] = useState<null | AxiosResponse>(null);

  useEffect(() => {
    async function fetchData(): Promise<void> {
      try {
        const uri: string = 'http://localhost:5000/' + params.categories + '/0/' + params.id;
        const response: AxiosResponse = await axios.get(uri);
        setDetails(response);
        console.log('details', details);
      } catch (error: AxiosError | any) {
        throw new Error('error', error);
      }
    }
    fetchData();
  }, []);

  const data = details?.data;
  return <div className={styles.resultDetailsContainer}>{details?.data}</div>;
}
