/*
 * Big thank you to http://www.dofmaster.com/equations.html for the formulas
 */

export function calculateHyperfocal(focalLengthMM: number, fNumber: number, confusionMM: number): number {
  return ( ( focalLengthMM ^ 2 ) / ( fNumber * confusionMM ) ) + focalLengthMM;
};