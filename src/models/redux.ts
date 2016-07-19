import * as formTypes from './form';

export enum ActionTypes {
  SetCameraOptions,
  SetFocalLength,
  SetAperture,
  SetSubjectDistance,
  SetCamera
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

export interface ActionArr extends Action {
  payload: Array<any>;
}

export class State {
  cameraOptions: formTypes.CameraTypeList;
  focalLength: number;
  aperture: number;
  subjectDistance: number;
  camera: formTypes.CameraDetails;

  constructor() {
    this.cameraOptions = new formTypes.CameraTypeList();
    this.focalLength = 5;
    this.aperture = 37;
    this.subjectDistance = 55;
    this.camera = this.cameraOptions.cameraTypes[0];
  }
}