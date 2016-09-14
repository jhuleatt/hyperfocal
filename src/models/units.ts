export enum Unit {
  Feet,
  Meters
}

export interface DescriptiveUnit {
  display: string;
  value: Unit;
}