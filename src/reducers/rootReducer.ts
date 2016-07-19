import { Action, ActionTypes, State } from '../models/redux';
import * as _ from 'lodash';

export const reducer = (state: State = {count: 0}, action: Action) => {
  switch (action.type) {
    case ActionTypes.Increment:
      const newState: State = _.clone(state);
      newState.count += action.payload;
      return newState;
    default:
      return state;
  }
};