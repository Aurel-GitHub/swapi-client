import axios, { AxiosError, AxiosResponse } from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import '../../styles/global/Global.css';
import { setSwapiData } from '../../app/feature/ResultSlice';
import { setIsLoading } from '../../app/feature/SpinnerSlice';
import { ICategorieState, ILangState } from '../../utils/interfaces';
import { setCategorie } from '../../app/feature/CategorieSlice';
import { setErrorMessage } from '../../app/feature/ErrorMessageSlice ';

export default function DropdownCategories(): JSX.Element {
  const dispatch = useDispatch();
  const isWookieActived: number = useSelector(
    (state: ILangState) => state.isWookieActived,
  ).isWookieActived;
  const categorieSelected = useSelector(
    (state: ICategorieState) => state.categorieSelected,
  ).categorieSelected;
  async function handleSelect(valueSelected: string): Promise<void> {
    try {
      if (valueSelected === categorieSelected) return;
      dispatch(setErrorMessage(''));
      dispatch(setIsLoading(true));
      dispatch(setCategorie(valueSelected));
      const response: AxiosResponse = await axios.get(`http://localhost:5000/${valueSelected}/0`);
      if (!isWookieActived) {
        dispatch(setSwapiData(response.data));
      }
      dispatch(setIsLoading(false));
    } catch (error: AxiosError | any) {
      throw new Error('error', error);
    }
  }

  return (
    <div className='marginTopRes'>
      <select
        name='categories'
        id='categories-select'
        onChange={(e) => handleSelect(e.target.value)}
      >
        {<option value={!categorieSelected ? '' : categorieSelected}>--Choose a category--</option>}
        <option value='planets'>Planets</option>
        <option value='starships'>Starships</option>
        <option value='vehicles'>Vehicles</option>
        <option value='people'>people</option>
        <option value='films'>Films</option>
        <option value='species'>Species</option>
      </select>
    </div>
  );
}
