/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería coordinateY Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Lucas_de-Vera_Gil
 * @since Mar 29 2026
 * @desc Draw class  
 *       Este fichero se encargar de definir la clase canvas que se encargará de dibujar en el canvas de HTML.
 * 
 * @see {@link https://mathieularose.com/main-function-in-node-js}
 */

'use strict';

import { Grid } from "./functions-grid.js";
import { Axes } from "./functions-axles.js";

export interface Point { 
  coordinateX: number; 
  coordinateY: number; 
}

export class Draw {
  public readonly PIXELS_PER_UNIT: number = 50;
  private readonly FUNCTION_COLOR: string = 'Crimson';
  private readonly FUNCTION_WIDTH: number = 2.5;

  private canvas: HTMLCanvasElement;
  private context: CanvasRenderingContext2D;

  constructor(canvasId: string) {
    this.canvas = document.getElementById(canvasId) as HTMLCanvasElement;
    this.context = this.canvas.getContext('2d') as CanvasRenderingContext2D;
  }

  /**
   * @description Método principal que orquesta el renderizado de la rejilla, ejes y puntos.
   * 
   * @param {Grid} grid Rejilla a dibujar.
   * @param {Axes} axes Ejes a dibujar.
   * @param {Point[]} points Puntos a dibujar.
   */
  public render(grid: Grid, axes: Axes, points: Point[] = []): void {
    this.clear();
    grid.drawGrid();
    axes.drawAxes();
    if (points.length > 1) {
      for (let i = 0; i < points.length - 1; ++i) {
        this.drawLine(points[i], points[i+1], this.FUNCTION_COLOR, this.FUNCTION_WIDTH);
      }
    }
  }

  /**
   * @description Limpia el canvas para un nuevo renderizado.
   */
  public clear(): void {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  /**
   * @description Dibuja una línea reduciendo parámetros agrupando coordenadas en Point.
   * 
   * @param {Point} firstPoint Punto inicial de la línea.
   * @param {Point} secondPoint Punto final de la línea.
   * @param {string} color Color de la línea.
   * @param {number} width Ancho de la línea.
   */
  public drawLine(firstPoint: Point, secondPoint: Point, color: string, width: number): void {
    this.context.save();
    this.context.beginPath();
    this.context.strokeStyle = color;
    this.context.lineWidth = width;
    this.context.moveTo(firstPoint.coordinateX, firstPoint.coordinateY);
    this.context.lineTo(secondPoint.coordinateX, secondPoint.coordinateY);
    this.context.stroke();
    this.context.restore();
  }

  /**
   * @description Dibuja texto en el canvas con estilo predefinido.
   * 
   * @param {string} text Texto a dibujar.
   * @param {Point} pos Posición donde dibujar el texto.
   * @param {string} color Color del texto.
   */
  public drawText(text: string, pos: Point, color: string): void {
    this.context.fillStyle = color;
    this.context.font = '12px "Gill Sans", sans-serif';
    this.context.textAlign = 'center';
    this.context.fillText(text, pos.coordinateX, pos.coordinateY);
  }

  /**
   * @description Devuelve el ancho del canvas.
   * 
   * @returns {number} Ancho del canvas en píxeles.
   */
  public getWidth(): number { 
    return this.canvas.width;
  }

  /**
   * @description Devuelve el alto del canvas.
   * 
   * @returns {number} Alto del canvas en píxeles.
   */
  public getHeight(): number { 
    return this.canvas.height; 
  }
}