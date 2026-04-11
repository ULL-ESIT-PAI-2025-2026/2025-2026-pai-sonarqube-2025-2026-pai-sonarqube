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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rational = void 0;
var Rational = /** @class */ (function () {
    /**
     * @description Constructs numberA Rational object with the given numerator and determinant.
     *
     * @param {number} newNumerator - The numerator of the rational number.
     * @param {number} newDeterminant - The determinant of the rational number.
     */
    function Rational(numerator, denominator) {
        this.numerator = numerator;
        this.denominator = denominator;
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
    Rational.prototype.getNumerator = function () {
        return this.numerator;
    };
    /**
     * @description Returns the determinant of the rational number.
     *
     * @returns {number} - The determinant of the rational number.
     */
    Rational.prototype.getDeterminant = function () {
        return this.denominator;
    };
    /**
     * @description Sets the numerator of the rational number to the given value.
     *
     * @param {number} newNumerator - The new numerator value.
     */
    Rational.prototype.setNumerator = function (newNumerator) {
        this.numerator = newNumerator;
        this.simplify();
    };
    /**
     * @description Sets the determinant of the rational number to the given value.
     *
     * @param {number} newDeterminant - The new determinant value.
     */
    Rational.prototype.setDeterminant = function (newDeterminant) {
        if (newDeterminant === 0) {
            throw new Error('Error: the numerator cant be cero');
        }
        else {
            this.denominator = newDeterminant;
        }
        this.simplify();
    };
    /**
     * @description Performs the addition of the current rational number with another rational.
     *
     * @param {Rational} otherRational - The other rational number to add.
     * @returns {Rational} - The result of the addition.
     */
    Rational.prototype.additionRationals = function (otherRational) {
        var newNumerator = (this.getNumerator() * otherRational.getDeterminant()) + (this.getDeterminant() * otherRational.getNumerator());
        var newDenominant = this.getDeterminant() * otherRational.getDeterminant();
        return new Rational(newNumerator, newDenominant).simplify();
    };
    /**
     * @description Performs the subtraction of the current rational number with another rational.
     *
     * @param {Rational} otherRational - The other rational number to subtract.
     * @returns {Rational} - The result of the subtraction.
     */
    Rational.prototype.subtractionRationals = function (otherRational) {
        var newNumerator = (this.getNumerator() * otherRational.getDeterminant()) - (this.getDeterminant() * otherRational.getNumerator());
        var newDenominant = this.getDeterminant() * otherRational.getDeterminant();
        return new Rational(newNumerator, newDenominant).simplify();
    };
    /**
     * @description Performs the multiplication of the current rational number with another rational.
     *
     * @param {Rational} otherRational - The other rational number to multiply.
     * @returns {Rational} - The result of the multiplication.
     */
    Rational.prototype.multiplicationRationals = function (otherRational) {
        var newNumerator = this.getNumerator() * otherRational.getNumerator();
        var newDenominant = this.getDeterminant() * otherRational.getDeterminant();
        return new Rational(newNumerator, newDenominant).simplify();
    };
    /**
     * @description Performs the division of the current rational number with another rational.
     *
     * @param {Rational} otherRational - The other rational number to divide.
     * @returns {Rational} - The result of the division.
     */
    Rational.prototype.divisionRationals = function (otherRational) {
        var newNumerator = this.getNumerator() * otherRational.getDeterminant();
        var newDenominant = this.getDeterminant() * otherRational.getNumerator();
        return new Rational(newNumerator, newDenominant).simplify();
    };
    /**
     * @description Compares the current rational number with another rational to determine if it is bigger.
     *
     * @param {Rational} otherRational - The other rational number to compare.
     * @returns {boolean} - True if the current rational number is bigger than the other, false otherwise.
     */
    Rational.prototype.isBiggerThan = function (otherRational) {
        return (this.getNumerator() * otherRational.getDeterminant()) > (this.getDeterminant() * otherRational.getNumerator());
    };
    /**
     * @description Compares the current rational number with another rational to determine if they are equal.
     *
     * @param {Rational} otherRational - The other rational number to compare.
     * @returns {boolean} - True if the current rational number is equal to the other, false otherwise.
     */
    Rational.prototype.isEqualTo = function (otherRational) {
        return (this.getNumerator() * otherRational.getDeterminant()) === (this.getDeterminant() * otherRational.getNumerator());
    };
    /**
     * @description Returns numberA string representation of the rational number in the form "numerator/determinant".
     *
     * @returns {string} - The string representation of the rational number.
     */
    Rational.prototype.toString = function () {
        return this.getNumerator() + '/' + this.getDeterminant();
    };
    Rational.prototype.simplify = function () {
        var gcd = this.greatestCommonDivisor(this.getNumerator(), this.getDeterminant());
        this.numerator /= gcd;
        this.denominator /= gcd;
        return this;
    };
    Rational.prototype.greatestCommonDivisor = function (a, b) {
        if (b === 0) {
            return Math.abs(a);
        }
        return this.greatestCommonDivisor(b, a % b);
    };
    return Rational;
}());
exports.Rational = Rational;
