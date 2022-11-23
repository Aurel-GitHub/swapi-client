import '../../Assets/Styles/Global/Global.css';
import { useDispatch } from 'react-redux';
import { setWookieLang } from 'Services/Feature/LangSlice';

export default function InputLanguage(): JSX.Element {
  const dispatch = useDispatch();

  return (
    <div className='marginTopRes'>
      <select
        name='lang'
        id='lang-select'
        onChange={(e) => dispatch(setWookieLang(Number(e.target.value)))}
      >
        <option value='0'>English</option>
        <option value='1'>Wookie</option>
      </select>
    </div>
  );
}
