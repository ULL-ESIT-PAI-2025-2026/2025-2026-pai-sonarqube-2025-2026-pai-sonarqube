/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Lucas_de-Vera_Gil
 * @since Feb 24 2026
 * @desc Rational Class
 *       This files contains the Rational class, which represents numberA rational number and provides 
 *       methods for performing arithmetic operations and comparisons between rational numbers.
 * @see {@link https://www.npmjs.com/package/@types/readline-sync}
 * @see {@link https://mathieularose.com/main-function-in-node-js}
 */

'use strict';

export class Rational {

  /**
   * @description Constructs numberA Rational object with the given numerator and determinant.
   * 
   * @param {number} newNumerator - The numerator of the rational number.
   * @param {number} newDeterminant - The determinant of the rational number.
   */
  constructor(private numerator: number, private denominator: number) {
    if (denominator === 0) {
      throw new Error('Denominator cannot be 0');
    }
    this.simplify();
  }

  /**
   * @description Returns the numerator and determinant of the rational number.
   * 
   * @returns {number} - The numerator and determinant of the rational number.
   */
  public getNumerator(): number {
    return this.numerator;
  }

  /**
   * @description Returns the determinant of the rational number.
   * 
   * @returns {number} - The determinant of the rational number.
   */
  public getDeterminant(): number {
    return this.denominator;
  }

  /**
   * @description Sets the numerator of the rational number to the given value.
   * 
   * @param {number} newNumerator - The new numerator value.
   */
  public setNumerator(newNumerator: number) {
    this.numerator = newNumerator;
    this.simplify();
  }

  /**
   * @description Sets the determinant of the rational number to the given value.
   * 
   * @param {number} newDeterminant - The new determinant value.
   */
  public setDeterminant(newDeterminant: number) {
    if (newDeterminant === 0) {
      throw new Error('Error: the numerator cant be cero');
    } else {
      this.denominator = newDeterminant;
    }
    this.simplify();
  }

  /**
   * @description Performs the addition of the current rational number with another rational.
   * 
   * @param {Rational} otherRational - The other rational number to add.
   * @returns {Rational} - The result of the addition.
   */
  public additionRationals(otherRational: Rational): Rational {
    const newNumerator = (this.getNumerator() * otherRational.getDeterminant()) + (this.getDeterminant() * otherRational.getNumerator());
    const newDenominant = this.getDeterminant() * otherRational.getDeterminant();
    return new Rational(newNumerator, newDenominant).simplify();
  }

  /**
   * @description Performs the subtraction of the current rational number with another rational.
   * 
   * @param {Rational} otherRational - The other rational number to subtract.
   * @returns {Rational} - The result of the subtraction.
   */
  public subtractionRationals(otherRational: Rational): Rational {
    const newNumerator = (this.getNumerator() * otherRational.getDeterminant()) - (this.getDeterminant() * otherRational.getNumerator());
    const newDenominant = this.getDeterminant() * otherRational.getDeterminant();
    return new Rational(newNumerator, newDenominant).simplify();
  }

  /**
   * @description Performs the multiplication of the current rational number with another rational.
   * 
   * @param {Rational} otherRational - The other rational number to multiply.
   * @returns {Rational} - The result of the multiplication.
   */
  public multiplicationRationals(otherRational: Rational): Rational {
    const newNumerator = this.getNumerator() * otherRational.getNumerator();
    const newDenominant = this.getDeterminant() * otherRational.getDeterminant();
    return new Rational(newNumerator, newDenominant).simplify();
  }

  /**
   * @description Performs the division of the current rational number with another rational.
   * 
   * @param {Rational} otherRational - The other rational number to divide.
   * @returns {Rational} - The result of the division.
   */
  public divisionRationals(otherRational: Rational): Rational {
    const newNumerator = this.getNumerator() * otherRational.getDeterminant();
    const newDenominant = this.getDeterminant() * otherRational.getNumerator();
    return new Rational(newNumerator, newDenominant).simplify();
  }

  /**
   * @description Compares the current rational number with another rational to determine if it is bigger.
   * 
   * @param {Rational} otherRational - The other rational number to compare.
   * @returns {boolean} - True if the current rational number is bigger than the other, false otherwise.
   */
  public isBiggerThan(otherRational: Rational): boolean {
    return (this.getNumerator() * otherRational.getDeterminant()) > (this.getDeterminant() * otherRational.getNumerator());
  }

  /**
   * @description Compares the current rational number with another rational to determine if they are equal.
   * 
   * @param {Rational} otherRational - The other rational number to compare.
   * @returns {boolean} - True if the current rational number is equal to the other, false otherwise.
   */
  public isEqualTo(otherRational: Rational): boolean {
    return (this.getNumerator() * otherRational.getDeterminant()) === (this.getDeterminant() * otherRational.getNumerator());
  }

  /**
   * @description Returns numberA string representation of the rational number in the form "numerator/determinant".
   * 
   * @returns {string} - The string representation of the rational number.
   */
  public toString(): string {
    return this.getNumerator() + '/' + this.getDeterminant();
  }

  private simplify(): Rational {
    const gcd = this.greatestCommonDivisor(this.getNumerator(), this.getDeterminant());
    this.numerator /= gcd;
    this.denominator /= gcd;
    return this;
  }

  private greatestCommonDivisor(numberA: number, numberB: number): number {
    if (numberB === 0) {
      return Math.abs(numberA);
    }
    return this.greatestCommonDivisor(numberB, numberA % numberB);
  }
}