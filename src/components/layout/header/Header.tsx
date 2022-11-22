import DropdownCategories from '../../inputs/DropdownCategories';
import InputLanguage from '../../inputs/InputLanguage';
import InputSearch from '../../inputs/InputSearch';
import styles from './Header.module.css';
import '../../../styles/global/Global.css';
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
