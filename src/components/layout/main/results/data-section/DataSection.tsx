import { ISwapResponse } from '../../../../../utils/interfaces';
import { useDispatch } from 'react-redux';
import { setIsLoading } from '../../../../../app/feature/SpinnerSlice';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { setSwapiData } from '../../../../../app/feature/ResultSlice';
import Card from '../../../../card/Card';
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
      {swapiData.results.map((data: any) => (
        // <Card name={data[Object.keys(data)[0]]} url={data.url} key={uuidv4()} />
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
