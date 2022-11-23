import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { ISwapiState } from '../../utils/interfaces/i-swapi-state';

export default function InputSearch(): JSX.Element {
  const swapiData = useSelector((state: ISwapiState) => state.swapi).swapi;

  return (
    <div className='marginTopRes'>
      {swapiData.results ? (
        <input
          type='search'
          id='site-search'
          disabled={!swapiData}
          placeholder='Recherche par nom'
        />
      ) : (
        <input placeholder='Veuillez choisir une catégorie' style={{ cursor: 'not-allowed' }} />
      )}
    </div>
  );
}
