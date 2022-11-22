import '../../styles/global/Global.css';

export default function DropdownCategories(): JSX.Element {
  return (
    <div className='marginTopRes'>
      <select name='categories' id='categories-select'>
        <option value=''>--Choisir une catégorie--</option>
        <option value='planets'>Planètes</option>
        <option value='spaceships'>Vaisseaux</option>
        <option value='vehicles'>Véhicules</option>
        <option value='people'>Personnage</option>
        <option value='films'>Film</option>
        <option value='species'>Espèces</option>
      </select>
    </div>
  );
}
