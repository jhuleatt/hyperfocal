import {IncrementAction, ActionTypes} from '../models/redux';

export function increment(amount: number): IncrementAction {
  const action: IncrementAction = {
    type: ActionTypes.Increment,
    payload: amount
  }

  return action;
}