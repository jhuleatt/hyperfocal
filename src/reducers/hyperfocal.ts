import { State } from '../models/state';
import { CameraModel } from '../models/camera';
import {Action, ActionTypes} from '../models/action';
import {convertToMM} from '../util/calculations';
import * as _ from 'lodash';

function verifyNumber(input: string): boolean {
  return true;
  // return /^\d+$/.test(input);
};

export function hyperfocalReducer(state: State, action: Action): State {
   switch (action.type) {
    case ActionTypes.SetFocalLength:
      if (verifyNumber(action.payload)) {
        state.focalLength = action.payload;
      }
      break;
    case ActionTypes.SetAperture:
      if (verifyNumber(action.payload)) {
        state.aperture = action.payload;
      }
      break;
    case ActionTypes.SetSubjectDistance:
      if (verifyNumber(action.payload)) {
        state.subjectDistanceMM = convertToMM(state.distanceUnit, action.payload);
      }
      break;
    case ActionTypes.SetMake:
      state.selectedMake = action.payload;
      break;
    case ActionTypes.SetModel:
      state.selectedModel = _.find(state.cameraModels, (model: CameraModel) => (model.model === action.payload));
      break;
    case ActionTypes.StartLoading:
      state.isLoading = true;
      break;
    case ActionTypes.StopLoading:
      state.isLoading = false;
      break;
    case ActionTypes.SetModels:
      state.cameraModels = action.payload;
      break;
    case ActionTypes.SetMakes:
      state.cameraMakes = action.payload;
      break;
  }

  return state;
}