import styles from './ResultDetails.module.css';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { setIsLoading } from 'Services/Feature/SpinnerSlice';
import { ISpinnerState } from 'Services/Utils/Interfaces';
import { useSelector, useDispatch } from 'react-redux';
import Spinner from 'Components/Spinner/Spinner';
import { v4 as uuidv4 } from 'uuid';

interface ITest {
  data: { currentKey: string; dataResult: any };
}
function Test({ data }: ITest): JSX.Element {
  const isRedirectLink: boolean =
    data.currentKey === 'films' ||
    data.currentKey === 'url' ||
    data.currentKey === 'planets' ||
    data.currentKey === 'starships' ||
    data.currentKey === 'vehicles' ||
    data.currentKey === 'species' ||
    data.currentKey === 'resident' ||
    data.currentKey === 'homeworld' ||
    data.currentKey === 'characters' ||
    data.currentKey === 'residents' ||
    data.currentKey === 'url';

  const isDateValue = data.currentKey === 'created' || data.currentKey === 'edited';

  if (isRedirectLink) {
    if (data.currentKey === 'homeworld' || data.currentKey === 'url') {
      const value: string = data.dataResult[data.currentKey];
      return <Link to={`${value.slice(21)}`}>Lien</Link>;
    } else {
      const value: string[] = data.dataResult[data.currentKey];
      if (!value.length) return <>No information available</>;
      return (
        <>
          {value.map((elt) => (
            <span key={uuidv4()}>
              <Link to={`${elt.slice(21)}`}>{elt}</Link>
              <br />
            </span>
          ))}
        </>
      );
    }
  } else if (isDateValue) {
    const value: string = data.dataResult[data.currentKey];
    const dateConverted: string = new Date(value).toLocaleDateString('en-us', {
      weekday: 'long',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
    return <>{dateConverted}</>;
  } else {
    return <></>;
  }
}

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
