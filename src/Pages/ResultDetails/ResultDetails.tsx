import styles from './ResultDetails.module.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { setIsLoading } from 'Services/Feature/SpinnerSlice';
import { ISpinnerState } from 'Services/Utils/Interfaces';
import { useSelector, useDispatch } from 'react-redux';
import Spinner from 'Components/Spinner/Spinner';
import FormatDetailsValue from 'Services/Utils/Formater/FormatValue/formatValue';

export default function ResultDetails(): JSX.Element {
  const params = useParams();
  const dispatch = useDispatch();

  const [precendentParams, setPrecendentParams] = useState<string>();
  const [details, setDetails] = useState<null | AxiosResponse>(null);
  const isLoading = useSelector((state: ISpinnerState) => state.isLoading).isLoading;
  const uri: string = 'http://localhost:5000/' + params.categories + '/0/' + params.id;
  useEffect(() => {
    async function fetchData(): Promise<void> {
      try {
        dispatch(setIsLoading(true));
        const response: AxiosResponse = await axios.get(uri);
        setDetails(response);
        setPrecendentParams(params.categories);
        dispatch(setIsLoading(false));
      } catch (error: AxiosError | any) {
        throw new Error('error', error);
      }
    }
    if (params.categories !== precendentParams) {
      fetchData();
    }
  }, [params.categories]);

  const data = details?.data;

  return (
    <div className={styles.resultDetailsContainer}>
      {isLoading ? (
        <div className={styles.spinnerContainer}>
          <Spinner />
        </div>
      ) : (
        <>
          {data && (
            <>
              {Object.keys(data).map((key, index) => {
                return (
                  <div key={index}>
                    {key.includes('films') ||
                    key.includes('url') ||
                    key.includes('planets') ||
                    key.includes('starships') ||
                    key.includes('vehicles') ||
                    key.includes('species') ||
                    key.includes('residents') ||
                    key.includes('characters') ||
                    key.includes('created') ||
                    key.includes('edited') ||
                    key.includes('homeworld') ? (
                      <>
                        <h4>{key}:</h4>
                        <FormatDetailsValue data={{ currentKey: key, dataResult: data }} />
                      </>
                    ) : (
                      <>
                        <h4>{key}:</h4>
                        {data[key]}
                      </>
                    )}

                    <hr />
                  </div>
                );
              })}
            </>
          )}
        </>
      )}
    </div>
  );
}
