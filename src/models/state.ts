import {
  CameraModel
} from './camera';

import {
  Unit,
  DescriptiveUnit
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
  distanceUnits: DescriptiveUnit[];
  focalLength: number;
  aperture: string;
  subjectDistance: string;
  isLoading: boolean;
}