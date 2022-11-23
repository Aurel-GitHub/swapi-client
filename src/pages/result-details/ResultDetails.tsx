import styles from './ResultDetails.module.css';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { setIsLoading } from '../../app/feature/SpinnerSlice';
import { ISpinnerState } from '../../utils/interfaces';
import { useSelector, useDispatch } from 'react-redux';
import Spinner from '../../components/spinner/Spinner';

interface ITest {
  data: { currentKey: string; dataResult: any };
}
function Test({ data }: ITest): JSX.Element {
  const isOK: boolean =
    data.currentKey === 'films' ||
    data.currentKey === 'url' ||
    data.currentKey === 'planets' ||
    data.currentKey === 'starships' ||
    data.currentKey === 'vehicles' ||
    data.currentKey === 'species' ||
    data.currentKey === 'homeworld';
  data.currentKey === 'url';
  data.dataResult;

  if (isOK) {
    if (data.currentKey === 'homeworld' || data.currentKey === 'url') {
      const value: string = data.dataResult[data.currentKey];
      return <Link to={`${value.slice(21)}`}>Lien</Link>;
    } else {
      const value: string[] = data.dataResult[data.currentKey];
      // console.log('possible val', value, data.currentKey);
      return (
        <>
          {value.forEach((elt) => (
            <p>
              <Link to={`${elt.slice(21)}`}>{elt}</Link>
            </p>
          ))}
        </>
      );
    }
  } else {
    return <></>;
  }
}

export default function ResultDetails(): JSX.Element {
  const params = useParams();
  const dispatch = useDispatch();

  console.log('params', params);

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
        console.log('details', details);
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
                    key.includes('homeworld') ? (
                      <>
                        <h4>{key}:</h4>
                        <Test data={{ currentKey: key, dataResult: data }} />
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
