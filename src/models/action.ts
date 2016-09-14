export enum ActionTypes {
  SetCameraOptions,
  SetFocalLength,
  SetAperture,
  SetSubjectDistance,
  SetMake,
  SetModel,
  StartLoading,
  StopLoading,
  SetProgress,
  InitializeFinished,
  SetDistanceUnit,
  SetMakes,
  SetModels
}

export interface Action {
  type: ActionTypes;
  payload: any;
}

export interface ActionNumeric extends Action {
  payload: number;
}

export interface ActionString extends Action {
  payload: string;
}

export interface ActionObject extends Action {
  payload: Object;
}

export interface ActionEnum extends Action {
  payload: number;
}

export interface ActionArr extends Action {
  payload: Array<any>;
}
