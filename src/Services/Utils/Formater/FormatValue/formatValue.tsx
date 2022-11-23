import { Link } from 'react-router-dom';
import { IFormatDetailsValue } from 'Services/Utils/Interfaces/index';
import { v4 as uuidv4 } from 'uuid';
import { ATTRIBUTESKEY } from 'Services/Utils/Enums/Index';

export default function FormatValue({ data }: IFormatDetailsValue): JSX.Element {
  const isRedirectLink: boolean =
    data.currentKey === ATTRIBUTESKEY.FILM ||
    data.currentKey === ATTRIBUTESKEY.URL ||
    data.currentKey === ATTRIBUTESKEY.PLANETS ||
    data.currentKey === ATTRIBUTESKEY.STARSHIPS ||
    data.currentKey === ATTRIBUTESKEY.VEHICLES ||
    data.currentKey === ATTRIBUTESKEY.SPECIES ||
    data.currentKey === ATTRIBUTESKEY.RESIDENT ||
    data.currentKey === ATTRIBUTESKEY.RESIDENTS ||
    data.currentKey === ATTRIBUTESKEY.HOMEWORLD ||
    data.currentKey === ATTRIBUTESKEY.CHARACTERS;

  const isDateValue =
    data.currentKey === ATTRIBUTESKEY.CREATED || data.currentKey === ATTRIBUTESKEY.EDITED;

  if (isRedirectLink) {
    if (data.currentKey === ATTRIBUTESKEY.HOMEWORLD || data.currentKey === ATTRIBUTESKEY.URL) {
      const value: string = data.dataResult[data.currentKey];
      return <Link to={`${value.slice(21)}`}>Lien</Link>;
    } else {
      const value: string[] = data.dataResult[data.currentKey];
      if (!value.length) return <>No information available</>;
      return (
        <>
          {value.map((elt) => (
            <span key={uuidv4()}>
              <Link to={`${elt.slice(21)}`}>{elt}</Link>
              <br />
            </span>
          ))}
        </>
      );
    }
  } else if (isDateValue) {
    const value: string = data.dataResult[data.currentKey];
    const dateConverted: string = new Date(value).toLocaleDateString('en-us', {
      weekday: 'long',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
    return <>{dateConverted}</>;
  } else {
    return <></>;
  }
}
