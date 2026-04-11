/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería coordinateY Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Lucas_de-Vera_Gil
 * @since Mar 29 2026
 * @desc Process data class  
 *       Este fichero se encarga de definir la clase ProcessData que se encargará de procesar los datos.
 * 
 * @see {@link https://mathieularose.com/main-function-in-node-js}
 */

'use strict';

import { Draw } from './functions-draw.js';
import { MathEvaluator } from './functions-calculate.js';

export class ProcessData {
  constructor(private draw: Draw) {}

  /**
   * @description Genera una lista de puntos (x, y) en píxeles para ser dibujados.
   * 
   * @param evaluator Instancia de MathEvaluator con la función cargada.
   * @param scale Píxeles por cada unidad matemática (ej: 40).
   * @return 
   */
  public calculatePoints(evaluator: MathEvaluator, scale: number): {coordinateX: number, coordinateY: number}[] {
    const points: {coordinateX: number, coordinateY: number}[] = [];
    const width = this.draw.getWidth();
    const height = this.draw.getHeight();
    const centerX = width / 2;
    const centerY = height / 2;
    for (let screenX = 0; screenX < width; ++screenX) {
      const mathX = (screenX - centerX) / scale;
      const mathY = evaluator.evaluate(mathX);
      if (!isNaN(mathY)) {
        const screenY = centerY - (mathY * scale);
        if ((screenY >= -height) && (screenY <= height * 2)) {
          points.push({ coordinateX: screenX, coordinateY: screenY });
        }
      }
    }
    return points;
  }
}