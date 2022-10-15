import exp from 'constants';
import Calculator from './Calculator';

describe('Calculator', () => {
  let calculator = new Calculator();

  test('add 1 + 1 returns 2', () => {
    expect(calculator.add(1, 1)).toBe(2);
  });

  test('subtract 1 - 1 returns 0', () => {
    expect(calculator.subtract(1, 1)).toBe(0);
  });

  test('dividing with 0 is not valid', () => {
    expect(() => {
      calculator.divide(6, 0);
    }).toThrow('Dividing with 0 is not valid');
  });

  test('add 1 + (-3) returns -2', () => {
    expect(calculator.add(1, -3)).toEqual(-2);
  });

  test('multiply 4 with 4 returns a number which is bigger than 15', () => {
    expect(calculator.multiply(4, 4)).toBeGreaterThanOrEqual(16);
  });

  //   test('add method is exits', () => {
  //     expect(calculator.add()).toEx;
  //   });
});