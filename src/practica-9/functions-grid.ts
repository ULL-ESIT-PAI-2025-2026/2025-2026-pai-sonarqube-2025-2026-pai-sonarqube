/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería coordinateY Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Lucas_de-Vera_Gil
 * @since Mar 29 2026
 * @desc Grid class  
 *       Este fichero se encargar de definir la clase Grid que se encargará de dibujar el grid en el canvas.
 * 
 * @see {@link https://mathieularose.com/main-function-in-node-js}
 */

'use strict';

import { Draw } from "./functions-draw.js";

export class Grid {
  private readonly GRID_COLOR: string = 'LightGrey';
  private readonly GRID_WIDTH: number = 1;

  constructor(private draw: Draw) {}

  /**
   * @description Orquesta el dibujo de la rejilla en el canvas.
   */
  public drawGrid(): void {
    this.drawLinesByAxis(true); 
    this.drawLinesByAxis(false); 
  }

  /**
   * @description Dibuja las líneas de la rejilla para un eje específico.
   * 
   * @param {boolean} isVertical Indica si se dibujan líneas verticales.
   */
  private drawLinesByAxis(isVertical: boolean): void {
    const limit = isVertical ? this.draw.getWidth() : this.draw.getHeight();
    const center = limit / 2;
    const step = this.draw.PIXELS_PER_UNIT;
    for (let pos = center; pos <= limit; pos += step) {
      this.renderGridLine(pos, isVertical);
    }
    for (let pos = center - step; pos >= 0; pos -= step) {
      this.renderGridLine(pos, isVertical);
    }
  }

  /**
   * @description Dibuja una línea de la rejilla en una posición específica.
   * 
   * @param {number} position Posición donde dibujar la línea.
   * @param {boolean} isVertical Indica si se dibuja una línea vertical.
   */
  private renderGridLine(position: number, isVertical: boolean): void {
    const length = isVertical ? this.draw.getHeight() : this.draw.getWidth();
    const initialPoint = isVertical ? { coordinateX: position, coordinateY: 0 } : { coordinateX: 0, coordinateY: position };
    const finalPoint = isVertical ? { coordinateX: position, coordinateY: length } : { coordinateX: length, coordinateY: position };
    this.draw.drawLine(initialPoint, finalPoint, this.GRID_COLOR, this.GRID_WIDTH);
  }
}