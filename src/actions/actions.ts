import {ActionNumeric, ActionTypes} from '../models/redux';

export function setFocalLength(focalLength: number): ActionNumeric {
  const action: ActionNumeric = {
    type: ActionTypes.SetFocalLength,
    payload: focalLength
  };

  return action;
}

export function setAperture(aperture: number): ActionNumeric {
  const action: ActionNumeric = {
    type: ActionTypes.SetAperture,
    payload: aperture
  };

  return action;
}

export function setSubjectDistance(distance: number): ActionNumeric {
  const action: ActionNumeric = {
    type: ActionTypes.SetSubjectDistance,
    payload: distance
  };

  return action;
}