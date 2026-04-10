/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería coordinateY Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Lucas_de-Vera_Gil
 * @since Mar 29 2026
 * @desc Calculate class  
 *       Este fichero se encarga de definir la clase calculate que se encargará de realizar los cálculos necesarios.
 * 
 * @see {@link https://mathieularose.com/main-function-in-node-js}
 */

'use strict';

declare const math: any;

export class MathEvaluator {
  private compiledExpression: Function | null = null;

  constructor() {}

  /**
   * @description Compila una expresión string para que sea rápida de evaluar después.
   * 
   * @param {string} expression La expresión matemática en formato string.
   * @return {boolean} true si la expresión se compiló correctamente, false si hubo un error.
   */
  public setExpression(expression: string): boolean {
    if (!expression.trim()) {
      this.compiledExpression = null;
      return false;
    }
    try { 
      this.compiledExpression = math.compile(expression);
      return true;
    } catch (error) {
      this.compiledExpression = null;
      return false;
    }
  }

  /**
   * @description Evalúa la expresión para un valor de x dado.
   * 
   * @param {number} xValue El valor de x para evaluar la expresión.
   * @return {number} El resultado de la evaluación o NaN si hay un error.
   */
  public evaluate(xValue: number): number {
    if (!this.compiledExpression) return NaN;
    try {
      return (this.compiledExpression as any).evaluate({ x: xValue });
    } catch {
      return NaN;
    }
  }
}