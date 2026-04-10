/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería coordinateY Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Lucas_de-Vera_Gil
 * @since Mar 29 2026
 * @desc Functions character
 *       Este programa define la clase character.
 * 
 * @see {@link https://mathieularose.com/main-function-in-node-js}
 */

'use strict';

import { Draw } from "./functions-draw.js";
import { Grid } from "./functions-grid.js";
import { Axes } from "./functions-axles.js";
import { MathEvaluator } from "./functions-calculate.js";
import { ProcessData } from "./functions-process-data.js";

function main(): void {
  const drawer = new Draw('canvas');
  const grid = new Grid(drawer);
  const axes = new Axes(drawer);
  const evaluator = new MathEvaluator();
  const processor = new ProcessData(drawer);
  const inputElement = document.getElementById('function-input') as HTMLInputElement;
  const drawButton = document.getElementById('draw-btn') as HTMLButtonElement;
  drawButton.addEventListener('click', () => {
    const expression = inputElement.value;
    if (evaluator.setExpression(expression)) {
      const points = processor.calculatePoints(evaluator, drawer.PIXELS_PER_UNIT);
      drawer.render(grid, axes, points);
    } else {
      console.log("La expresión no es válida");
    }
  });
  drawer.render(grid, axes, []);
}

main();