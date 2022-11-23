import axios, { AxiosError, AxiosResponse } from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import 'Assets/Styles/Global/Responsive.css';
import { setSwapiData } from 'Services/Feature/ResultSlice';
import { setIsLoading } from 'Services/Feature/SpinnerSlice';
import { ICategorieState, ILangState } from 'Services/Utils/Interfaces';
import { setCategorie } from 'Services/Feature/CategorieSlice';
import { setErrorMessage } from 'Services/Feature/ErrorMessageSlice ';

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
      const response: AxiosResponse = await axios.get(
        `http://localhost:5000/${valueSelected}/${isWookieActived}`,
      );
      // ! conserver commenter le format wookie ne marche pas avec les recherches par catégories
      // if (!isWookieActived) {
      dispatch(setSwapiData(response.data));
      // }
      dispatch(setIsLoading(false));
    } catch (error: AxiosError | any) {
      throw new Error('error', error);
    }
  }

  return (
    <div className='marginTopResponsive'>
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
