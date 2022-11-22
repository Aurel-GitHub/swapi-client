import { UserAction } from '../enums/user-action';

export interface IActionUserReducer {
  type: UserAction.LOGIN;
  payload: string;
}
