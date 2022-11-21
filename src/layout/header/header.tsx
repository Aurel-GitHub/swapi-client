import DropdownCategories from '../../components/inputs/dropdown-categories';
import InputLanguage from '../../components/inputs/input-language';
import InputSearch from '../../components/inputs/input-search';
import styles from './header.module.css';
import { Link } from 'react-router-dom';

export default function Header(): JSX.Element {
  return (
    <header>
      <nav className={styles.navHeader}>
        <Link to='/'>
          <h1 className={styles.logo}>swapi</h1>
        </Link>
        <Link to='/se-connecter'>
          <h1 className={styles.logo}>LOGIN TEST</h1>
        </Link>
        <InputSearch />
        <DropdownCategories />
        <InputLanguage />
      </nav>
    </header>
  );
}
