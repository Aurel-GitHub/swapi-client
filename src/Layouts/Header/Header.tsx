import DropdownCategories from 'Components/Inputs/DropdownCategories';
import InputLanguage from 'Components/Inputs/InputLanguage';
import InputSearch from 'Components/Inputs/InputSearch';
import styles from './Header.module.css';
import 'Assets/Styles/Global/Global.css';
import { Link, useLocation } from 'react-router-dom';

export default function Header(): JSX.Element {
  const location = useLocation();
  console.log(
    'loc',
    location.hash,
    location.key,
    location.pathname,
    location.search,
    location.state,
  );
  return (
    <header>
      <nav className={styles.navHeader}>
        <Link to='/' className='decorationNone'>
          <h1 className={styles.logo}>swapi</h1>
        </Link>
        {location.pathname === '/' && (
          <>
            <DropdownCategories />
            <InputSearch />
          </>
        )}
        <InputLanguage />
      </nav>
    </header>
  );
}
