import Card from '../../../card/Card';
import styles from './Results.module.css';
import { useSelector } from 'react-redux';
import { ISwapResponse, ISwapiState } from '../../../../utils/interfaces';
import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState } from 'react';

export default function Results(): JSX.Element {
  const swapiData = useSelector((state: ISwapiState) => state.swapi).swapi;
  console.log('uuid', uuidv4());

  useEffect(() => {
    swapiData;
  }, [swapiData]);
  return (
    <div className={styles.resultSection}>
      {swapiData?.results ? (
        swapiData.results.map((data: any) => (
          <Card name={data.name} url='qsdqsdqsd' key={uuidv4()} />
        ))
      ) : (
        <h3>Aucune donnée actuellement, Veuillez saisir une catégorie</h3>
      )}
    </div>
  );
}
