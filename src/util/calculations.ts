import { Unit } from '../models/units';

function getConversionFactor(unit: Unit) {
  let conversionFactor: number;
  if (unit === Unit.Feet) {
    conversionFactor = 0.00328084;
  } else if (unit === Unit.Meters) {
    conversionFactor = .001;
  }

  return conversionFactor;
}

export function convertFromMM(unit: Unit, distance: number): number {
  return distance * getConversionFactor(unit);
}

export function convertToMM(unit: Unit, distance: number): number {
  return distance / getConversionFactor(unit);
}


/*
 * Big thank you to http://www.dofmaster.com/equations.html for the formulas
 */

function square(value: number): number {
  return value * value;
}

export function calculateHyperfocal(focalLengthMM: number, fNumber: number, confusionMM: number): number {
  return ( square(focalLengthMM) / ( fNumber * confusionMM ) ) + focalLengthMM;
};