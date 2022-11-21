import styles from './header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export default function Header(): JSX.Element {
  return (
    <header>
      <nav className={styles.navHeader}>
        <h1 className={styles.logo}>swapi</h1>
        <div className={styles.btnHeader}>
          <input type='search' id='site-search' name='q' />
          <button>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
        <div>
          <select name='categories' id='categories-select'>
            <option value=''>--Choisir une catégorie--</option>
            <option value='planets'>Planètes</option>
            <option value='spaceships'>Vaisseaux</option>
            <option value='vehicles'>Véhicules</option>
            <option value='people'>Personnage</option>
            <option value='films'>Film</option>
            <option value='species'>Espèces</option>
          </select>
        </div>
        <div className={styles.btnHeader}>
          <select name='lang' id='lang-select'>
            <option value=''>Français</option>
            <option value='wookie'>Wookie</option>
          </select>
        </div>
      </nav>
    </header>
  );
}
