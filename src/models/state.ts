import {
  CameraModel
} from './camera';

import {
  Unit
} from './units';

export interface Initializing {
  progress: number;
}

export type StateModel = Initializing | State;

export interface State {
  cameraMakes: string[];
  cameraModels: CameraModel[];
  selectedMake: string;
  selectedModel: CameraModel;
  distanceUnit: Unit;
  focalLength: number;
  aperture: number;
  subjectDistanceMM: number;
  isLoading: boolean;
}