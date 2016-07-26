import { Action, ActionTypes, State } from '../models/redux';
import * as _ from 'lodash';

function verifyNumber(input: string): boolean {
  return /^\d+$/.test(input);
};

export const reducer = (state: State = new State(), action: Action) => {
  const newState: State = _.clone(state);
  switch (action.type) {
    case ActionTypes.SetFocalLength:
      if (!verifyNumber(action.payload)) {
        return state;
      }
      newState.focalLength = action.payload;
      return newState;
    case ActionTypes.SetAperture:
    if (!verifyNumber(action.payload)) {
        return state;
      }
      newState.aperture = action.payload;
      return newState;
    case ActionTypes.SetSubjectDistance:
      if (!verifyNumber(action.payload)) {
        return state;
      }
      newState.subjectDistance = action.payload;
      return newState;
    case ActionTypes.SetMake:
      newState.camera = newState.cameraOptions.getCameraDetails(action.payload, '');
      return newState;
    case ActionTypes.SetModel:
      newState.camera = newState.cameraOptions.getCameraDetails(newState.camera.make, action.payload);
      return newState;
    default:
      return state;
  }
};