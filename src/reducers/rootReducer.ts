import { Action, ActionTypes, State } from '../models/redux';
import * as _ from 'lodash';

export const reducer = (state: State = new State(), action: Action) => {
  const newState: State = _.clone(state);
  switch (action.type) {
    case ActionTypes.SetFocalLength:
      newState.focalLength = action.payload;
      return newState;
    case ActionTypes.SetAperture:
      newState.aperture = action.payload;
      return newState;
    case ActionTypes.SetSubjectDistance:
      newState.subjectDistance = action.payload;
      return newState;
    default:
      return state;
  }
};