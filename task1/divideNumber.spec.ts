import { describe, expect, it } from 'vitest'
import { DivByZeroError, InvalidArgumentError, divideNumber } from './divideNumber';

/*
Write a function that divides 2 numbers.
Handle all corner cases and special situations.

New req: arguments might be provided as strings. Function should convert them to numbers. 
*/

/*
Practicalities:
- avoid going for the gold, start with simple tests

- write a test that forces you to write the code that you already know you want to write

- don't move tests when you extract classes/functions in the refactoring phase (decoupling, fragile tests problem)
  -> WRONG: "1 test class per production code class".  

- need to be learnt by doing excercises before bringing it to your professional work
*/

describe('divideNumber', () => {
  it.todo('should calculate result for non-zero number arguments');
  it.todo('should throw an exception when dividing by 0');
  it.todo('should throw an exception when argument is NaN');

  it.each([
    [4, 2, 2],
    [3, 2, 1.5],
    [4.5, 1.5, 3],
    [4, -2, -2],
    [-4, 2, -2],
    [-4, -2, 2],
    [4, 1, 4],
    [0, 2, 0],
  ])('should calculate result for non-zero number arguments: %s / %s = %s', (x, y, expected) => {
    expect(divideNumber(x, y)).toBeCloseTo(expected);
  });

  it('should throw an exception when dividing by 0', () => {
    const x = 4;
    const y = 0;

    expect(() => divideNumber(x, y)).toThrowError(DivByZeroError);
  });

  it.each([
    [2, NaN],
    [NaN, 2],
  ])('should throw an exception when argument is NaN: %s / %s', (x, y) => {
    expect(() => divideNumber(x, y)).toThrowError(InvalidArgumentError);
  });

  it.todo('should calculate result for string arguments');
  it.todo('should throw an exception when dividing by "0"');
  it.todo('should throw an exception when argument is not convertable to number');


  it.each([
    ['4', 2, 2],
    [4, '2', 2],
    ['4', '2', 2],
    ['4.4', '2.2', 2],
  ])('should calculate result for string arguments: %s / %s = %s', (x, y, expected) => {
    expect(divideNumber(x, y)).toBeCloseTo(expected);
  });

  it('should throw an exception when dividing by "0"', () => {
    const x = 4;
    const y = '0';

    expect(() => divideNumber(x, y)).toThrowError(DivByZeroError);
  });

  it.each([
    [2, ''],
    ['', 2],
    [2, '2abc'],
    ['2abc', 2],
    [2, 'abc2'],
    ['abc2', 2],
  ])('should throw an exception when argument is not convertable to number: %s / %s', (x, y) => {
    expect(() => divideNumber(x, y)).toThrowError(InvalidArgumentError);
  });
});
