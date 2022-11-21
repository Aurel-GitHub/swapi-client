import React from 'react';
import styles from './header.module.css';

export default function Header(): JSX.Element {
  return (
    <header>
      <nav className={styles.navHeader}>
        <h1 className={styles.logo}>swapi</h1>
      </nav>
    </header>
  );
}
