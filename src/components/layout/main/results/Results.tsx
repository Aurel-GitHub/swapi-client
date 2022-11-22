import Card from '../../../card/Card';
import styles from './Results.module.css';
import { useSelector } from 'react-redux';
import { ISwapiState, ISpinnerState } from '../../../../utils/interfaces';
import { v4 as uuidv4 } from 'uuid';
import { useEffect } from 'react';
import Spinner from '../../../spinner/Spinner';

export default function Results(): JSX.Element {
  const swapiData = useSelector((state: ISwapiState) => state.swapi).swapi;
  const isLoading = useSelector((state: ISpinnerState) => state.isLoading).isLoading;

  console.log('isLoading', isLoading);
  useEffect(() => {
    // swapiData;
    console.log(isLoading);
  }, [swapiData, isLoading]);
  return (
    <div className={styles.resultSection}>
      {!isLoading ? (
        <>
          {swapiData?.results ? (
            swapiData.results.map((data: any) => (
              <Card name={data.name} url='qsdqsdqsd' key={uuidv4()} />
            ))
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
