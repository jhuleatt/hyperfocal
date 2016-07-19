export class CameraDetails {
  name: string;
  confusion: number;
  constructor(cameraName: string, cameraConfusion: number) {
    this.name = cameraName;
    this.confusion = cameraConfusion;
  }
}

export class CameraTypeList {
  cameraTypes: Array<CameraDetails>;
  constructor() {
    this.cameraTypes = [];
    this.cameraTypes.push(new CameraDetails('Nikon D750', 7));
    this.cameraTypes.push(new CameraDetails('Canon 5DMkIII', 9));
  }

  makeSelectProperties(): SelectProperties {
    const propsArr: Array<SelectOption> = this.cameraTypes.map((c: CameraDetails) => {
      return new SelectOption(c.name, c.name);
    });

    return new SelectProperties(propsArr);
  }
}

export class FormProperties {
  cameraTypes: CameraTypeList;
  selectedCameraName: string;
  selectedFocalLength: number;
  selectedFStop: string;
  subjectDistance: number;

  constructor() {
    this.cameraTypes = new CameraTypeList();
    this.selectedCameraName = 'Nikon D750';
    this.selectedFocalLength = 35;
    this.selectedFStop = 'f/16';
    this.subjectDistance = 28;
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

  constructor(values: Array<SelectOption>) {
    this.values = values;
    this.value = values[0].value;
    this.onChange = console.log.bind(null, 'select Change!');
  }
}

export interface InputProperties {
  label: string;
  value: string;
  onChange: Function;
}