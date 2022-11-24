import 'Assets/Styles/Global/Responsive.css';
import { useDispatch } from 'react-redux';
import { setWookieLang } from 'Services/Feature/LangSlice';

export default function InputLanguage(): JSX.Element {
  const dispatch = useDispatch();

  return (
    <div className='marginTopResponsive'>
      <select
        name='lang'
        id='lang-select'
        onChange={(e) => dispatch(setWookieLang(Number(e.target.value)))}
      >
        <option value='0'>Display in English</option>
        <option value='1'>Display in Wookie</option>
      </select>
    </div>
  );
}
