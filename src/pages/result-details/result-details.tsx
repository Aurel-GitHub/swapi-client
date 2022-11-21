import styles from './result-details.module.css';
import { useParams } from 'react-router-dom';
import React from 'react';

export default function ResultDetails(): JSX.Element {
  const params = useParams();
  console.log('params', params);
  return (
    <div className={styles.resultDetailsContainer}>
      <span> details !!!!</span>
    </div>
  );
}
