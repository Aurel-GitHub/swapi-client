import styles from './Results.module.css';
import { useSelector } from 'react-redux';
import {
  ISwapiState,
  ISpinnerState,
  ILangState,
  IErrorMessage,
} from '../../../../utils/interfaces';
import Spinner from '../../../spinner/Spinner';
import DataSection from './data-section/DataSection';
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
                <h3>Veuillez saisir une catégorie</h3>
              )}
            </>
          ) : (
            <>
              <h4 style={{ textAlign: 'center' }}>
                Le Wookie JSON doit être sûrement endommagé
                <a href='https://github.com/phalt/swapi/issues/128'> Issue GitHub</a> <br />
                et ce malgrès le possible
                <a href='https://github.com/phalt/swapi/issues/100'> work around</a>
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
