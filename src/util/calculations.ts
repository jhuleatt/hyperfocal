/*
 * Big thank you to http://www.dofmaster.com/equations.html for the formulas
 */

function square(value: number): number {
  return value * value;
}

export function calculateHyperfocal(focalLengthMM: number, fNumber: number, confusionMM: number): number {
  return ( square(focalLengthMM) / ( fNumber * confusionMM ) ) + focalLengthMM;
};