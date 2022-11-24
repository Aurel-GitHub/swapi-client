import { useDispatch, useSelector } from 'react-redux';
import 'Assets/Styles/Global/Responsive.css';
import { ICategorieState } from 'Services/Utils/Interfaces';
import { setCategorie } from 'Services/Feature/CategorieSlice';
export default function DropdownCategories(): JSX.Element {
  const dispatch = useDispatch();

  const categorieSelected = useSelector(
    (state: ICategorieState) => state.categorieSelected,
  ).categorieSelected;

  function handleSelect(valueSelected: string): void {
    if (valueSelected === categorieSelected) return;
    dispatch(setCategorie(valueSelected));
  }

  return (
    <div className='marginTopResponsive'>
      <select
        name='categories'
        id='categories-select'
        onChange={(e) => handleSelect(e.target.value)}
        defaultValue={categorieSelected}
      >
        {<option value=''>--Choose a category--</option>}
        <option value='planets'>Planets</option>
        <option value='starships'>Starships</option>
        <option value='vehicles'>Vehicles</option>
        <option value='people'>People</option>
        <option value='films'>Films</option>
        <option value='species'>Species</option>
      </select>
    </div>
  );
}
