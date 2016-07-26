import {ActionNumeric, ActionString, ActionTypes} from '../models/redux';

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

export function setCameraMake(make: string): ActionString {
  const action: ActionString = {
    type: ActionTypes.SetMake,
    payload: make
  };

  return action;
}

export function setCameraModel(model: string): ActionString {
  const action: ActionString = {
    type: ActionTypes.SetModel,
    payload: model
  };

  return action;
}