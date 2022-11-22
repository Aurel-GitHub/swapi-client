import DropdownCategories from '../../inputs/dropdown-categories';
import InputLanguage from '../../inputs/input-language';
import InputSearch from '../../inputs/input-search';
import styles from './header.module.css';
import '../../../styles/global/global.css';
import { Link } from 'react-router-dom';

export default function Header(): JSX.Element {
  return (
    <header>
      <nav className={styles.navHeader}>
        <Link to='/' className='decorationNone'>
          <h1 className={styles.logo}>swapi</h1>
        </Link>
        <InputSearch />
        <DropdownCategories />
        <InputLanguage />
      </nav>
    </header>
  );
}
