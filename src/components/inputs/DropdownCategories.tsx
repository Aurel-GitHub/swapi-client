import axios, { AxiosError, AxiosResponse } from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import '../../styles/global/Global.css';
import { setSwapiData } from '../../app/feature/ResultSlice';
import { setIsLoading } from '../../app/feature/SpinnerSlice';
import { ILangState } from '../../utils/interfaces';

export default function DropdownCategories(): JSX.Element {
  const dispatch = useDispatch();
  const isWookieActived: number = useSelector(
    (state: ILangState) => state.isWookieActived,
  ).isWookieActived;
  async function handleSelect(valueSelected: string): Promise<void> {
    try {
      dispatch(setIsLoading(true));
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
        <option value=''>--Choisir une catégorie--</option>
        <option value='planets'>Planètes</option>
        <option value='starships'>Vaisseaux</option>
        <option value='vehicles'>Véhicules</option>
        <option value='people'>Personnages</option>
        <option value='films'>Films</option>
        <option value='species'>Espèces</option>
      </select>
    </div>
  );
}
