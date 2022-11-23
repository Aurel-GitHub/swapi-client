import styles from './Results.module.css';
import { useSelector } from 'react-redux';
import {
  ISwapiState,
  ISpinnerState,
  ILangState,
  IErrorMessage,
} from 'Services/Utils/Interfaces/index';
import Spinner from 'Components/Spinner/Spinner';
import DataSection from './DataSection/DataSection';
import { useEffect } from 'react';

export default function Results(): JSX.Element {
  const swapiData = useSelector((state: ISwapiState) => state.swapi).swapi;
  const isLoading = useSelector((state: ISpinnerState) => state.isLoading).isLoading;
  const isWookieActived = useSelector((state: ILangState) => state.isWookieActived).isWookieActived;
  const errorMessage = useSelector((state: IErrorMessage) => state.errorMessage).errorMessage;

  const wookieBrokenJSONTrad = localStorage.getItem('wookieTrad');

  useEffect(() => undefined, [swapiData, isLoading, isWookieActived, errorMessage]);

  return (
    <div className={styles.resultSection}>
      {errorMessage ? <h3>{errorMessage}</h3> : ''}
      {!isLoading ? (
        <>
          {!isWookieActived ? (
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
          ) : (
            <>
              <h4 style={{ textAlign: 'center' }}>
                The Wookie JSON must be damaged:
                <a href='https://github.com/phalt/swapi/issues/128'> Issue GitHub</a> <br />I tried
                with this work around though:
                <a href='https://github.com/phalt/swapi/issues/100'> Work around</a>
              </h4>
              <p className={styles.errorWookieResponse}>{String(wookieBrokenJSONTrad)}</p>
            </>
          )}
        </>
      ) : (
        <Spinner />
      )}
    </div>
  );
}
