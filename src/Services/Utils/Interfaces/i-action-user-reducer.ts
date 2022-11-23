import { UserAction } from '../Enums/userAction';

export interface IActionUserReducer {
  type: UserAction.LOGIN;
  payload: string;
}
