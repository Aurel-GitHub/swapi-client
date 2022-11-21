import React from 'react';
import styles from './footer.module.css';

export default function Footer(): JSX.Element {
  const date: Date = new Date();
  const currentYear: number = date.getFullYear();
  return (
    <div className={styles.footer}>
      <p className={styles.footerText}>Swapi App - {currentYear}</p>
    </div>
  );
}
