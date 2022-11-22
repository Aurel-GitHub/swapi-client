import { UserAction } from '../enums/UserAction';

export interface IActionUserReducer {
  type: UserAction.LOGIN;
  payload: string;
}
