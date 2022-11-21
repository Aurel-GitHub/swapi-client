import '../../styles/global/global.css';
export default function InputLanguage(): JSX.Element {
  return (
    <div className='marginTopRes'>
      <select name='lang' id='lang-select'>
        <option value=''>Français</option>
        <option value='wookie'>Wookie</option>
      </select>
    </div>
  );
}
