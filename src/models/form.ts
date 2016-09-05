import { SelectProperties } from './select';

export interface FormProperties {
  cameraMakeSelectOptions: SelectProperties;
  cameraModelSelectOptions: SelectProperties;
  selectedFocalLength: number;
  selectedFStop: number;
  subjectDistance: number;
  setFocalLength: Function;
  setAperture: Function;
  setSubjectDistance: Function;
  setCameraMake: Function;
  setCameraModel: Function;
  distanceUnitDisplayName: string;
}
