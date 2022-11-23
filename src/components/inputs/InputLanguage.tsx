import '../../styles/global/Global.css';
import { useDispatch } from 'react-redux';
import { setWookieLang } from '../../app/feature/LangSlice';

export default function InputLanguage(): JSX.Element {
  const dispatch = useDispatch();

  return (
    <div className='marginTopRes'>
      <select
        name='lang'
        id='lang-select'
        onChange={(e) => dispatch(setWookieLang(Number(e.target.value)))}
      >
        <option value='0'>Français</option>
        <option value='1'>Wookie</option>
      </select>
    </div>
  );
}
