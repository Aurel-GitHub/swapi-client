import styles from './ResultDetails.module.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { setIsLoading } from 'Services/Feature/SpinnerSlice';
import { ILangState, ISpinnerState } from 'Services/Utils/Interfaces';
import { useSelector, useDispatch } from 'react-redux';
import Spinner from 'Components/Spinner/Spinner';
import FormatValue from 'Services/Utils/Formaters/FormatValue/formatValue';

export default function ResultDetails(): JSX.Element {
  const params = useParams();
  const dispatch = useDispatch();
  const [oldLanguageSelected, setOldLanguageSelected] = useState<null | number>(null);
  const [precendentParams, setPrecendentParams] = useState<string>();
  const [details, setDetails] = useState<null | AxiosResponse>(null);
  const isLoading = useSelector((state: ISpinnerState) => state.isLoading).isLoading;
  const isWookieActived: number = useSelector(
    (state: ILangState) => state.isWookieActived,
  ).isWookieActived;

  const uri: string =
    'http://localhost:5000/' + params.categories + '/' + isWookieActived + '/' + params.id;

  const formatField: string[] = [
    'films',
    'url',
    'planets',
    'starships',
    'vehicles',
    'species',
    'residents',
    'characters',
    'created',
    'edited',
    'homeworld',
  ];

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
    if (isWookieActived !== oldLanguageSelected) {
      fetchData();
      setOldLanguageSelected(isWookieActived);
    }
  }, [params.categories, isWookieActived]);

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
                    {formatField.includes(key) ? (
                      <>
                        <h4>{key}:</h4>
                        <FormatValue data={{ currentKey: key, dataResult: data }} />
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
