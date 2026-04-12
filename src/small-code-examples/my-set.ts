/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Andrés David Riera Rivera
 * @author Lucas de Vera Gil
 * @author Cristhian Cruz Delgado
 * @since April 10 2026
 * @desc My set class
 */

'use strict';

/**
 * Class representing a set of numbers.
 *
 */
export class MySet {
  /**
   * @param {number[]} elements the elements of the set
   */
   // SonnarQube issue: Member 'elements: number[]' is never reassigned; mark it as `readonly`.
  constructor(private elements: number[] = []) {}

  toString(): string {
    return `{${this.elements.join(', ')}}`;
  }
  add(element: number): void {
    if (!this.has(element)) {
      this.elements.push(element);
    }
  }
  has(element: number): boolean {
    // SonnarQube issue: Expected a `for-of` loop instead of a `for` loop with this simple iteration.
    for (let i: number = 0; i < this.elements.length; i++) {
      if (this.elements[i] === element) {
        return true;
      }
    }
    return false;
  }
  size(): number {
    return this.elements.length;
  }
  union(other: MySet): MySet {
    const result: MySet = new MySet();
    // SonnarQube issue: Expected a `for-of` loop instead of a `for` loop with this simple iteration.
    for (let i: number = 0; i < this.elements.length; i++) {
      result.add(this.elements[i]);
    }
    // SonnarQube issue: Expected a `for-of` loop instead of a `for` loop with this simple iteration.
    for (let i: number = 0; i < other.elements.length; i++) {
      result.add(other.elements[i]);
    }
    return result;
  }
  intersection(other: MySet): MySet {
    const result: MySet = new MySet();
    // SonnarQube issue: Expected a `for-of` loop instead of a `for` loop with this simple iteration.
    for (let i: number = 0; i < this.elements.length; i++) {
      if (other.has(this.elements[i])) {
        result.add(this.elements[i]);
      }
    }
    return result;
  }
  difference(other: MySet): MySet {
    const result: MySet = new MySet();
    // SonnarQube issue: Expected a `for-of` loop instead of a `for` loop with this simple iteration.
    for (let i: number = 0; i < this.elements.length; i++) {
      if (!other.has(this.elements[i])) {
        result.add(this.elements[i]);
      }
    }
    return result;
  }
  isEmpty(): boolean {
    return this.elements.length === 0;
  }
  isSubsetOf(other: MySet): boolean {
    // SonnarQube issue: Expected a `for-of` loop instead of a `for` loop with this simple iteration.
    for (let i: number = 0; i < this.elements.length; i++) {
      if (!other.has(this.elements[i])) {
        return false;
      }
    }
    return true;
  }
  isDisjointOf(other: MySet): boolean {
    // SonnarQube issue: Expected a `for-of` loop instead of a `for` loop with this simple iteration.
    for (let i: number = 0; i < this.elements.length; i++) {
      if (other.has(this.elements[i])) {
        return false;
      }
    }
    return true;
  }
  isEqual(other: MySet): boolean {
    if (this.size() !== other.size()) {
      return false;
    }
    return this.isSubsetOf(other) && other.isSubsetOf(this);
  }
}