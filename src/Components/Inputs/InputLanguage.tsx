import 'Assets/Styles/Global/Responsive.css';
import { useDispatch, useSelector } from 'react-redux';
import { setWookieLang } from 'Services/Feature/LangSlice';
import { ISpinnerState } from 'Services/Utils/Interfaces';

export default function InputLanguage(): JSX.Element {
  const dispatch = useDispatch();
  const isLoading = useSelector((state: ISpinnerState) => state.isLoading).isLoading;

  return (
    <div className='marginTopResponsive'>
      <select
        name='lang'
        id='lang-select'
        onChange={(e) => dispatch(setWookieLang(Number(e.target.value)))}
        disabled={isLoading}
      >
        <option value='0'>Display in English</option>
        <option value='1'>Display in Wookie</option>
      </select>
    </div>
  );
}
