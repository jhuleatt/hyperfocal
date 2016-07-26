import { cameras } from '../../data/cameras';

export class VizProperties {
  camera: CameraDetails;
  focalLength: number;
  aperture: number;
  subjectDistance: number;

  constructor(camera: CameraDetails, focalLength: number, aperture: number, subjectDistance: number) {
    this.camera = camera;
    this.focalLength = focalLength;
    this.aperture = aperture;
    this.subjectDistance = subjectDistance;
  }
}

export class CameraDetails {
  make: string;
  model: string;
  confusion: number;
  constructor(make: string, model: string, cameraConfusion: number) {
    this.make = make;
    this.model = model;
    this.confusion = cameraConfusion;
  }

  prettyPrint(): string {
    return `${this.make} ${this.model}`;
  }
}

export class CameraTypeList {
  cameraTypes: Array<CameraDetails>;

  constructor() {
    this.cameraTypes = cameras as Array<CameraDetails>;
  }

  findCameraDetails(make: string, model: string): CameraDetails {
    for (let i: number = 0; i < this.cameraTypes.length; i++) {
      if (this.cameraTypes[i].make === make && (model === '' || this.cameraTypes[i].model === model) ) {
        return new CameraDetails(this.cameraTypes[i].make, this.cameraTypes[i].model, this.cameraTypes[i].confusion);
      }
    }
    console.warn(`no camera details found for make "${make}" and model "${model}"`);
    return null;
  }

  getCameraMakes(): Array<SelectOption> {
    return this.cameraTypes.map((cameraDetails) => cameraDetails.make)
              .reduce((prev, current) => {
                if (prev.indexOf(current) === -1) {
                  prev.push(current);
                }

                return prev;
              }, [])
              .map((make) => new SelectOption(make, make));
  }

  getCameraModels(make: string): Array<SelectOption> {
    return this.cameraTypes
            .filter((cameraType) => (cameraType.make === make))
            .map((cameraType) => (new SelectOption(cameraType.model, cameraType.model)));
  }

  getCameraDetails(make: string, model: string): CameraDetails {
    return this.findCameraDetails(make, model || '');
  }

  getConfusion(make: string, model: string): number {
    return this.findCameraDetails(make, model).confusion;
  }
}

export class FormProperties {
  cameraTypes: CameraTypeList;
  selectedFocalLength: number;
  selectedFStop: number;
  selectedCamera: CameraDetails;
  subjectDistance: number;
  setFocalLength: Function;
  setAperture: Function;
  setSubjectDistance: Function;
  setCameraMake: Function;
  setCameraModel: Function;

  constructor(cameraTypes: CameraTypeList,
              selectedFocalLength: number,
              selectedFStop: number,
              subjectDistance: number,
              camera: CameraDetails) {
    this.cameraTypes = cameraTypes;
    this.selectedFocalLength = selectedFocalLength;
    this.selectedFStop = selectedFStop;
    this.subjectDistance = subjectDistance;
    this.selectedCamera = camera;
  }
}

export class SelectOption {
  value: string;
  display: string;

  constructor(value: string, display: string) {
    this.value = value;
    this.display = display;
  }
}

export class SelectProperties {
  values: Array<SelectOption>;
  value: string;
  onChange: Function;

  constructor(values: Array<SelectOption>, value: string) {
    this.values = values;
    this.value = value;
    this.onChange = console.log.bind(null, 'select Change!');
  }
}

export interface InputProperties {
  label: string;
  value: string;
  onChange: Function;
}