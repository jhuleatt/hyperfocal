import { StateModel, Initializing, State } from '../models/state';
import {Action, ActionTypes} from '../models/action';

export function progressReducer(state: Initializing, action: Action): StateModel {
   switch (action.type) {
    case ActionTypes.SetProgress:
      state.progress = action.payload;
      break;
    case ActionTypes.InitializeFinished:
      state = action.payload;
      break;
  }

  return state;
}