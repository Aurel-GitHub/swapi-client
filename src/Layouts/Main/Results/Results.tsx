import styles from './Results.module.css';
import { useSelector, useDispatch } from 'react-redux';
import {
  ISwapiState,
  ISpinnerState,
  ILangState,
  IErrorMessage,
  ICategorieState,
} from 'Services/Utils/Interfaces/index';
import Spinner from 'Components/Spinner/Spinner';
import DataSection from './DataSection/DataSection';
import { useEffect, useState } from 'react';
import { setIsLoading } from 'Services/Feature/SpinnerSlice';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { setSwapiData } from 'Services/Feature/ResultSlice';
import { setErrorMessage } from 'Services/Feature/ErrorMessageSlice ';

export default function Results(): JSX.Element {
  const dispatch = useDispatch();

  const [oldCategorySelected, setOldCategorySelected] = useState<string>('');

  const swapiData = useSelector((state: ISwapiState) => state.swapi).swapi;
  const isLoading = useSelector((state: ISpinnerState) => state.isLoading).isLoading;
  const isWookieActived = useSelector((state: ILangState) => state.isWookieActived).isWookieActived;
  const errorMessage = useSelector((state: IErrorMessage) => state.errorMessage).errorMessage;
  const categorieSelected = useSelector(
    (state: ICategorieState) => state.categorieSelected,
  ).categorieSelected;

  const uri: string = 'http://localhost:5000/' + categorieSelected + '/' + isWookieActived;
  useEffect(() => {
    async function fetchData(): Promise<void> {
      if (!categorieSelected) return;
      setOldCategorySelected(categorieSelected);
      try {
        dispatch(setErrorMessage(''));
        dispatch(setIsLoading(true));
        const response: AxiosResponse = await axios.get(uri);
        if (!isWookieActived) {
          dispatch(setSwapiData(response.data));
          console.log('Data without Wookie', response.data);
        } else {
          const jsonBroken = response.data;
          const jsonRepaired = JSON.parse(jsonBroken.replace('whhuanan', '"whhuanan"'));
          console.log('wookie repared', JSON.parse(jsonRepaired));
          dispatch(setSwapiData(jsonRepaired));
        }
      } catch (error: AxiosError | any) {
        throw new Error('error', error);
      } finally {
        dispatch(setIsLoading(false));
      }
    }
    if (categorieSelected && categorieSelected !== oldCategorySelected) {
      fetchData();
    }
  }, [swapiData, isLoading, errorMessage, isWookieActived, categorieSelected]);

  return (
    <div className={styles.resultSection}>
      {errorMessage ? <h3>{errorMessage}</h3> : ''}
      {!isLoading ? (
        <>
          <>
            {swapiData?.results ? (
              <DataSection
                results={swapiData.results}
                count={swapiData.count}
                next={swapiData.next}
                previous={swapiData.previous}
              />
            ) : (
              <h3>Please select a category</h3>
            )}
          </>
        </>
      ) : (
        <Spinner />
      )}
    </div>
  );
}
