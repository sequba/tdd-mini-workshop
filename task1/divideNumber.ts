export class DivByZeroError extends Error { 
  constructor() {
    super(`Division by zero`); 
  } 
}

export class InvalidArgumentError extends Error { 
  constructor() {
    super(`Invalid argument`); 
  } 
}

function convertToNumber(x: number | string): number {
  if (x === '') {
    return NaN;
  }

  return Number(x);
}

export function divideNumber(x: number | string, y: number | string): number {
  const xAsNumber = convertToNumber(x);
  const yAsNumber = convertToNumber(y);

  if (Number.isNaN(xAsNumber) || Number.isNaN(yAsNumber)) {
    throw new InvalidArgumentError();
  }

  if (yAsNumber === 0) {
    throw new DivByZeroError();
  }

  return xAsNumber/yAsNumber;
}
