import { useDispatch, useSelector } from 'react-redux';
import { ICategorieState, ISwapResponse } from '../../utils/interfaces';
import { ISwapiState } from '../../utils/interfaces/i-swapi-state';
import { setIsLoading } from '../../app/feature/SpinnerSlice';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { setSwapiData } from '../../app/feature/ResultSlice';
import { useState } from 'react';
import { setErrorMessage } from '../../app/feature/ErrorMessageSlice ';

export default function InputSearch(): JSX.Element {
  const dispatch = useDispatch();
  const swapiData = useSelector((state: ISwapiState) => state.swapi).swapi;
  const categorieSelected = useSelector(
    (state: ICategorieState) => state.categorieSelected,
  ).categorieSelected;

  const [valueSearch, setvalueSearch] = useState<string>('');
  async function handleSearch(): Promise<void> {
    try {
      dispatch(setErrorMessage(''));
      if (!valueSearch) return;
      dispatch(setIsLoading(true));
      const response: AxiosResponse = await axios.get(
        `http://localhost:5000/search/${categorieSelected}/${valueSearch
          .trim()
          .toLocaleLowerCase()}`,
      );
      const result: ISwapResponse = response.data;
      if (result.results.length < 1) {
        dispatch(setErrorMessage(`${valueSearch} n'existe pas`));
      }
      dispatch(setSwapiData(response.data));
      dispatch(setIsLoading(false));
    } catch (error: AxiosError | any) {
      throw new Error('error', error);
    }
  }

  return (
    <div className='marginTopRes'>
      {swapiData.results ? (
        <>
          <input
            type='search'
            id='site-search'
            disabled={!swapiData}
            placeholder='Recherche par nom'
            value={valueSearch}
            onChange={(e) => setvalueSearch(e.target.value)}
          />
          <button onClick={handleSearch}>chercher</button>
        </>
      ) : (
        <button style={{ cursor: 'not-allowed' }} disabled>
          Veuillez choisir une catégorie
        </button>
      )}
    </div>
  );
}
