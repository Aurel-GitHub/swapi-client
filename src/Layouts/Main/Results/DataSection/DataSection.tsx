import { ICardDetailProps, ISwapResponse } from 'Services/Utils/Interfaces/index';
import { useDispatch } from 'react-redux';
import { setIsLoading } from 'Services/Feature/SpinnerSlice';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { setSwapiData } from 'Services/Feature/ResultSlice';
import Card from 'Components/Card/Card';
import { v4 as uuidv4 } from 'uuid';

export default function DataSection(swapiData: ISwapResponse): JSX.Element {
  const dispatch = useDispatch();

  async function changePage(url: string | null): Promise<void> {
    try {
      if (!url) return;
      dispatch(setIsLoading(true));
      const response: AxiosResponse = await axios.get(url);
      dispatch(setSwapiData(response.data));
      dispatch(setIsLoading(false));
    } catch (error: AxiosError | any) {
      throw new Error('error', error);
    }
  }
  return (
    <>
      {swapiData.results.map((data: ICardDetailProps) => (
        <Card cardDetail={data} key={uuidv4()} />
      ))}
      <div className='pageSection'>
        {swapiData.previous && (
          <button onClick={() => changePage(swapiData.previous)}>Précédent</button>
        )}
        {swapiData.next && <button onClick={() => changePage(swapiData.next)}>Suivant</button>}
      </div>
    </>
  );
}
