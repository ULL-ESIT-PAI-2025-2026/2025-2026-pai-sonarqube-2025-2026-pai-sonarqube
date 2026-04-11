const { Rational } = require('../src/rational_class');

describe('Rational class tests', () => {
  test('should create a rational number with the given numerator and determinant', () => {
    const rational = new Rational(1, 2);
    expect(rational.getNumerator()).toBe(1);
    expect(rational.getDeterminant()).toBe(2);
  });

  test('should throw an error when the determinant is zero', () => {
    expect(() => new Rational(1, 0)).toThrow('Denominator cannot be 0');
  });

  test('should set the numerator and determinant of the rational number', () => {
    const rational = new Rational(1, 2);
    rational.setNumerator(3);
    rational.setDeterminant(4);
    expect(rational.getNumerator()).toBe(3);
    expect(rational.getDeterminant()).toBe(4);
  });

  test('should add two rational numbers and return the result as a new rational number', () => {
    const rational1 = new Rational(1, 2);
    const rational2 = new Rational(1, 3);
    const result = rational1.additionRationals(rational2);
    expect(result.getNumerator()).toBe(5);
    expect(result.getDeterminant()).toBe(6);
  });

  test('should subtract two rational numbers and return the result as a new rational number', () => {
    const rational1 = new Rational(1, 2);
    const rational2 = new Rational(1, 3);
    const result = rational1.subtractionRationals(rational2);
    expect(result.getNumerator()).toBe(1);
    expect(result.getDeterminant()).toBe(6);
  });

  test('should multiply two rational numbers and return the result as a new rational number', () => {
    const rational1 = new Rational(1, 2);
    const rational2 = new Rational(1, 3);
    const result = rational1.multiplicationRationals(rational2);
    expect(result.getNumerator()).toBe(1);
    expect(result.getDeterminant()).toBe(6);
  });

  test('should divide two rational numbers and return the result as a new rational number', () => {
    const rational1 = new Rational(1, 2);
    const rational2 = new Rational(1, 3);
    const result = rational1.divisionRationals(rational2);
    expect(result.getNumerator()).toBe(3);
    expect(result.getDeterminant()).toBe(2);
  });

  test('should compare two rational numbers and return true if they are bigger', () => {
    const rational1 = new Rational(1, 2);
    const rational2 = new Rational(1, 3);
    expect(rational1.isBiggerThan(rational2)).toBe(true);
  });

  test('should compare two rational numbers and return false if they are equal', () => {
    const rational1 = new Rational(1, 2);
    const rational2 = new Rational(2, 4);
    expect(rational1.isEqualTo(rational2)).toBe(true);
  });

  test('should compare two rational numbers and return false if they are not equal', () => {
    const rational1 = new Rational(1, 2);
    const rational2 = new Rational(1, 3);
    expect(rational1.isEqualTo(rational2)).toBe(false);
  });

  test('should return the string representation of the rational number', () => {
    const rational = new Rational(1, 2);
    expect(rational.toString()).toBe('1/2');
  });

  test('should simplify the rational number when created', () => {
    const rational = new Rational(2, 4);
    expect(rational.getNumerator()).toBe(1);
    expect(rational.getDeterminant()).toBe(2);
  });

  test('should simplify the rational number when the numerator is set', () => {
    const rational = new Rational(1, 2);
    rational.setNumerator(2);
    expect(rational.getNumerator()).toBe(1);
    expect(rational.getDeterminant()).toBe(1);
  });

  test('should simplify the rational number when the determinant is set', () => {
    const rational = new Rational(1, 2);
    rational.setDeterminant(4);
    expect(rational.getNumerator()).toBe(1);
    expect(rational.getDeterminant()).toBe(4);
  });
});