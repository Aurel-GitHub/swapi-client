import styles from './Results.module.css';
import { useSelector } from 'react-redux';
import { ISwapiState, ISpinnerState, ISwapResponse } from '../../../../utils/interfaces';
import { useEffect } from 'react';
import Spinner from '../../../spinner/Spinner';
import DataSection from './data-section/DataSection';

export default function Results(): JSX.Element {
  const swapiData = useSelector((state: ISwapiState) => state.swapi).swapi;
  const isLoading = useSelector((state: ISpinnerState) => state.isLoading).isLoading;

  console.log('isLoading', isLoading);
  useEffect(() => undefined, [swapiData, isLoading]);

  return (
    <div className={styles.resultSection}>
      {!isLoading ? (
        <>
          {swapiData?.results ? (
            <DataSection
              results={swapiData.results}
              count={swapiData.count}
              next={swapiData.next}
              previous={swapiData.previous}
            />
          ) : (
            <h3>Aucune donnée actuellement, Veuillez saisir une catégorie</h3>
          )}
        </>
      ) : (
        <Spinner />
      )}
    </div>
  );
}
