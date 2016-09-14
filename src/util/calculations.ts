import { Unit } from '../models/units';

/**
 * Like Math.round but takes an argument for precision
 */
export function round(num: number, precision: number) {
  const factor: number = Math.pow(10, precision);
  const shiftedNum: number = num * factor;
  const numRoundedToPrecision: number = Math.round(shiftedNum);
  const roundedNum = numRoundedToPrecision / factor;
  return roundedNum;
}

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