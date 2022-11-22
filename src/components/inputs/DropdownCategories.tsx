import axios, { AxiosError, AxiosResponse } from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import '../../styles/global/Global.css';
import { setSwapiData } from '../../app/feature/ResultSlice';

export default function DropdownCategories(): JSX.Element {
  const dispatch = useDispatch();
  const toto = useSelector((state: any) => state.swapi.swapi);
  async function handleSelect(valueSelected: string): Promise<void> {
    try {
      const response: AxiosResponse = await axios.get(`http://localhost:5000/${valueSelected}/0`);
      dispatch(setSwapiData(response.data));
    } catch (error: AxiosError | any) {
      throw new Error('axios error', error);
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
        <option value='people'>Personnage</option>
        <option value='films'>Film</option>
        <option value='species'>Espèces</option>
      </select>
    </div>
  );
}
