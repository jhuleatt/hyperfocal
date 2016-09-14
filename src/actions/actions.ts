import {
  Action,
  ActionNumeric,
  ActionString,
  ActionTypes,
  ActionObject,
  ActionArr,
  ActionEnum
} from '../models/action';
import {CameraModel} from '../models/camera';
import {Unit} from '../models/units';
import {State} from '../models/state';
import 'whatwg-fetch';

export function setModels(models: CameraModel[]): ActionArr {
  const action: ActionArr = {
    type: ActionTypes.SetModels,
    payload: models
  };

  return action;
}

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

export function setMake(make: string): ActionString {
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

export function initializeFinished(state: State): ActionObject {
  const action: ActionObject = {
    type: ActionTypes.InitializeFinished,
    payload: state
  };

  return action;
}

export function setProgress(progress: number): ActionNumeric {
  const action: ActionNumeric = {
    type: ActionTypes.SetProgress,
    payload: progress
  };

  return action;
}

export function setDistanceUnit(newUnit: Unit): ActionEnum {
  const action: ActionEnum = {
    type: ActionTypes.SetDistanceUnit,
    payload: newUnit
  };

  return action;
}

export function startLoading(): Action {
  const action: Action = {
    type: ActionTypes.StartLoading,
    payload: null
  };

  return action;
}

export function stopLoading(): Action {
  const action: Action = {
    type: ActionTypes.StopLoading,
    payload: null
  };

  return action;
}

function getModelsHelper(make: string): Promise<any> {
  return fetch(`https://raw.githubusercontent.com/jhuleatt/hyperfocal/master/data/Models/${make}.json`);
}

export function initialize(): Function {
  let makes: Array<any>;

  return (dispatch: Function) => {
    dispatch(setProgress(10));
    return fetch('https://raw.githubusercontent.com/jhuleatt/hyperfocal/master/data/Makes.json')
    .then(function(response) {
      dispatch(setProgress(40));
      return response.json();
    }).then(function(json) {
      dispatch(setProgress(60));
      makes = json;

      return getModelsHelper(makes[0]);
    }).then(function(response) {
      dispatch(setProgress(80));
      return response.json();
    }).then(function(json) {
      dispatch(setProgress(100));
      const models = json.map((jModel: any) => ({model: jModel.name, confusion: jModel.confusion}));

      dispatch(initializeFinished({
        cameraMakes: makes,
        cameraModels: models,
        selectedMake: makes[0],
        selectedModel: models[0],
        distanceUnits: [
          {
            display: 'feet',
            value: Unit.Feet
          },
          {
            display: 'meters',
            value: Unit.Meters
          }
        ],
        distanceUnit: Unit.Feet,
        focalLength: 35,
        aperture: '1.8',
        subjectDistance: '10',
        isLoading: false
      }));
    })
    .catch(function(ex) {
      console.warn('parsing failed', ex);
    });
  };
}

export function setCameraMake(make: string): Function {
  return (dispatch: Function) => {
    dispatch(setMake(make));
    dispatch(startLoading());
    return getModelsHelper(make)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      dispatch(stopLoading);

      const cameraModels = json.map((jModel: any) => ({model: jModel.name, confusion: jModel.confusion}));
      dispatch(setModels(cameraModels));
      dispatch(setCameraModel(cameraModels[0].model));
    }).catch(function(ex) {
      console.warn('parsing failed', ex);
    });
  };
}