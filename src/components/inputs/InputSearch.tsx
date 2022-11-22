import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { ISwapiState } from '../../utils/interfaces/i-swapi-state';

export default function InputSearch(): JSX.Element {
  const swapiData = useSelector((state: ISwapiState) => state.swapi).swapi;

  return (
    <div className='marginTopRes'>
      <input type='search' id='site-search' />
      <button>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
    </div>
  );
}
