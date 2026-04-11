/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Lucas_de-Vera_Gil
 * @since Feb 24 2026
 * @desc Rational
 *       This files the main file of the rational program.
 * @see {@link https://www.npmjs.com/package/@types/readline-sync}
 * @see {@link https://mathieularose.com/main-function-in-node-js}
 */

'use strict';

const prompt = require('prompt-sync')({ sigint: true });

import { Rational } from './rational_class'; 
  
/**
 * @description Displays the menu and returns the selected option.
 * 
 * @returns {number} - The selected option from the menu.
 */
export function menu(): number {
  console.log('Menu ->');
  console.log('1. Addition of rational numbers.');
  console.log('2. Subtraction of rational numbers.');
  console.log('3. Multiplication of rational numbers.');
  console.log('4. Division of rational numbers.');
  console.log('5. Comparison of rational numbers.');
  console.log('6. Set new rational numbers.');
  console.log('7. Show current rational numbers.');
  console.log('8. Exit. \n');
  return Number(prompt('Select an option: '));
}

/**
 * @description Request the user to enter the numerator and determinant of a rational number and returns a Rational object.
 * 
 * @returns {Rational} - A Rational object created with the user input.
 */
export function generateRational(): Rational {
  let numerator: number = Number(prompt('Enter the numerator of the rational number -> '));
  let determinant: number = Number(prompt('Enter the determinant of the rational number ->'));
  return new Rational(numerator, determinant);
}

/**
 * @description Request the user to enter two rational numbers and returns them as an array of Rational objects.
 * 
 * @returns {[Rational, Rational]} - An array containing the two Rational objects created with the user input.
 */
export function generateNewRationals(): [Rational, Rational] { 
  console.log('Enter the first rational number:');
  const newRational1 = generateRational();
  console.log('Enter the second rational number:');
  const newRational2 = generateRational();
  return [newRational1, newRational2];
}

/**
 * @description Executes the selected operation on the given rational numbers and displays the result.
 * 
 * @param {number} option - The selected operation.
 * @param {Rational} rational1 - The first rational number.
 * @param {Rational} rational2 - The second rational number.
 */
export function selectOperation(option: number, rational1: Rational, rational2: Rational): void {
  switch (option) {
    case 1:
      const additionResult = rational1.additionRationals(rational2);
      console.log('Addition: ' + additionResult.toString() + '\n');
      break;
    case 2:
      const subtractionResult = rational1.subtractionRationals(rational2);
      console.log('Subtraction: ' + subtractionResult.toString() + '\n');
      break;
    case 3:
      const multiplicationResult = rational1.multiplicationRationals(rational2);
      console.log('Multiplication: ' + multiplicationResult.toString() + '\n');
      break;
    case 4:
      const divisionResult = rational1.divisionRationals(rational2);
      console.log('Division: ' + divisionResult.toString() + '\n');
      break;
    case 5:
      const isBigger = rational1.isBiggerThan(rational2);
      isBigger ? console.log('The first rational number is bigger than the second.'+ '\n') : 
                 console.log('The first rational number is not bigger than the second.' + '\n');      
      break;
    case 6:
      const [newRational1, newRational2] = generateNewRationals();
      rational1 = newRational1;
      rational2 = newRational2;
      break;
    case 7:
      console.log('Showing the current rational numbers:');
      console.log('First rational number: ' + rational1.toString() + '\n');
      console.log('Second rational number: ' + rational2.toString() + '\n');
    default:
      console.log('Invalid option, please try again.');
      break;
  }
}

export function main(): void {
  let option: number;
  console.log('Enter the first rational number:');
  let rational1 = generateRational();
  console.log('Enter the second rational number:');
  let rational2 = generateRational();
  while (true) {
    option = menu();
    if (option === 8) {
      console.log('Exiting the program. Goodbye!');
      break;
    } else if ((option < 1) || (option > 8)) {
      console.log('Invalid option, please try again.');
    } else {
      selectOperation(option, rational1, rational2);
    }
  }
}

if (require.main === module) {
  main();
}