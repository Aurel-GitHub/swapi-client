import DropdownCategories from '../../inputs/dropdown-categories';
import InputLanguage from '../../inputs/input-language';
import InputSearch from '../../inputs/input-search';
import styles from './header.module.css';

export default function Header(): JSX.Element {
  return (
    <header>
      <nav className={styles.navHeader}>
        <h1 className={styles.logo}>swapi</h1>
        <InputSearch />
        <DropdownCategories />
        <InputLanguage />
      </nav>
    </header>
  );
}
