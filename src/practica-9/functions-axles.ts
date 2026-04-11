/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Lucas_de-Vera_Gil
 * @since Mar 29 2026
 * @desc Axes class  
 *       Este fichero se encarga de definir la clase axes que se encargará de dibujar los ejes en el canvas de HTML.
 */

'use strict';

import { Draw, Point } from "./functions-draw.js";

export class Axes {
  private readonly TICK_SIZE = 5;
  private readonly LABEL_OFFSET = 20;
  private readonly AXIS_WIDTH = 2;
  private readonly AXIS_COLOR = 'black';
  private readonly LABEL_INTERVAL = 2;

  constructor(private draw: Draw) {}

  /**
   * @description Método principal que orquesta el dibujo de los ejes en el canvas, incluyendo las flechas y marcas de graduación.
   */
  public drawAxes(): void {
    const width = this.draw.getWidth();
    const height = this.draw.getHeight();
    const center: Point = { coordinateX: width / 2, coordinateY: height / 2 };
    this.draw.drawLine({coordinateX: 0, coordinateY: center.coordinateY}, {coordinateX: width, coordinateY: center.coordinateY}, this.AXIS_COLOR, this.AXIS_WIDTH); 
    this.draw.drawLine({coordinateX: center.coordinateX, coordinateY: 0}, {coordinateX: center.coordinateX, coordinateY: height}, this.AXIS_COLOR, this.AXIS_WIDTH);
    this.drawArrows(center);
    this.drawAxisTicks('X', center);
    this.drawAxisTicks('Y', center);
    this.draw.drawText("0", { coordinateX: center.coordinateX - 12, coordinateY: center.coordinateY + 15 }, this.AXIS_COLOR);
  }

  /**
   * @description Dibuja las marcas de graduación en los ejes, con etiquetas numéricas cada cierto intervalo.
   * 
   * @param {'X' | 'Y'} axis Indica si se dibujan marcas para el eje X o Y. 
   * @param {Point} center Punto central del canvas.
   */
  private drawAxisTicks(axis: 'X' | 'Y', center: Point): void {
    const isX = axis === 'X';
    const limit = isX ? this.draw.getWidth() : this.draw.getHeight();
    const centerPos = isX ? center.coordinateX : center.coordinateY;
    const step = this.draw.PIXELS_PER_UNIT;
    for (let i = 1; i * step < limit; ++i) {
      const offset = i * step;
      const shouldLabel = i % this.LABEL_INTERVAL === 0;
      this.renderMark(isX, centerPos + offset, center, isX ? i : -i, shouldLabel);
      this.renderMark(isX, centerPos - offset, center, isX ? -i : i, shouldLabel);
    }
  }

  /**
   * @description Dibuja una marca de graduación en el eje, opcionalmente con etiqueta numérica.
   * 
   * @param {boolean} isX Indica si la marca es para el eje X o Y. 
   * @param {number} pos Posición donde dibujar la marca.
   * @param {Point} center Punto central del canvas para calcular la posición de la marca.
   * @param {number} value Valor numérico a etiquetar en la marca.
   */
  private renderMark(isX: boolean, pos: number, center: Point, value: number, label: boolean): void {
    const p1 = isX ? { coordinateX: pos, coordinateY: center.coordinateY - this.TICK_SIZE } : { coordinateX: center.coordinateX - this.TICK_SIZE, coordinateY: pos };
    const p2 = isX ? { coordinateX: pos, coordinateY: center.coordinateY + this.TICK_SIZE } : { coordinateX: center.coordinateX + this.TICK_SIZE, coordinateY: pos };
    this.draw.drawLine(p1, p2, this.AXIS_COLOR, 1);
    if (label) {
      const textPos = isX ? { coordinateX: pos, coordinateY: center.coordinateY + this.LABEL_OFFSET } : { coordinateX: center.coordinateX - this.LABEL_OFFSET, coordinateY: pos + 4 };
      this.draw.drawText(value.toString(), textPos, this.AXIS_COLOR);
    }
  }

  /**
   * @description Dibuja las flechas en los extremos de los ejes para indicar la dirección positiva.
   * 
   * @param {Point} center Punto central del canvas.
   */
  private drawArrows(center: Point): void {
    const size = 8;
    const w = this.draw.getWidth();
    this.draw.drawLine({coordinateX: w, coordinateY: center.coordinateY}, {coordinateX: w - size, coordinateY: center.coordinateY - size}, this.AXIS_COLOR, 2);
    this.draw.drawLine({coordinateX: w, coordinateY: center.coordinateY}, {coordinateX: w - size, coordinateY: center.coordinateY + size}, this.AXIS_COLOR, 2);
    this.draw.drawLine({coordinateX: center.coordinateX, coordinateY: 0}, {coordinateX: center.coordinateX - size, coordinateY: size}, this.AXIS_COLOR, 2);
    this.draw.drawLine({coordinateX: center.coordinateX, coordinateY: 0}, {coordinateX: center.coordinateX + size, coordinateY: size}, this.AXIS_COLOR, 2);
  }
}