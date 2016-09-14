import { SelectValues } from './select';
import { Unit, DescriptiveUnit } from './units';

export interface FormProperties {
  values: FormValues;
  actions: FormActions;
}

export interface FormValues {
  cameraMakeSelectValues: SelectValues;
  cameraModelSelectValues: SelectValues;
  distanceUnitSelectValues: DescriptiveUnit[];
  selectedDistanceUnit: Unit;
  selectedFocalLength: number;
  selectedFStop: string;
  subjectDistance: string;
  distanceUnitDisplayName: string;
}

export interface FormActions {
  setFocalLength: Function;
  setAperture: Function;
  setSubjectDistance: Function;
  setCameraMake: Function;
  setCameraModel: Function;
  setDistanceUnit: Function;
}
