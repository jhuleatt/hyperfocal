import { StateModel, State, Initializing } from '../models/state';
import {Action} from '../models/action';
import { progressReducer } from './progress';
import { hyperfocalReducer } from './hyperfocal';
import * as _ from 'lodash';

const initialState: StateModel = {
  progress: 0
};

function isInitializing (x: any): x is Initializing {
  return typeof x.progress === 'number';
};

export function reducer (state: StateModel = initialState, action: Action): StateModel {
  let newState: StateModel = _.clone(state);

  if (isInitializing(newState)) {
    return progressReducer(newState, action);
  } else {
    return hyperfocalReducer(newState, action);
  }
};
