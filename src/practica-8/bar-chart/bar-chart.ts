/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería coordinateY Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Lucas_de-Vera_Gil
 * @since Mar 19 2026
 * @desc Bar Chart 
 *       Este programa define la clase BarChart, que se encarga de dibujar un gráfico de barras en un canvas HTML.
 * @see {@link https://mathieularose.com/main-function-in-node-js}
 */

'use strict';

export interface Trail {
  NOM_TRAMO: string;
  LONGITUD: number;
}

export class BarChart {
  private readonly MARGIN_TOP: number = 60;
  private readonly MARGIN_BOTTOM: number = 150; 
  private readonly MARGIN_SIDES: number = 100;
  private readonly BAR_COLOR: string = 'MidnightBlue'; 
  private readonly GRID_COLOR: string = 'Silver'; 
  private readonly TEXT_COLOR: string = 'DimGray'; 

  private canvas: HTMLCanvasElement;
  private context: CanvasRenderingContext2D;

  constructor(canvasId: string) {
    this.canvas = document.getElementById(canvasId) as HTMLCanvasElement;
    this.context = this.canvas.getContext('2d') as CanvasRenderingContext2D;
    this.adjustCanvasSize();
  }

  /**
   * @description Ajusta el tamaño del canvas a dimensiones fijas para asegurar una presentación consistente del gráfico de barras.
   */
  private adjustCanvasSize(): void {
    this.canvas.width = 1300;
    this.canvas.height = 900;
  }

  /**
   * @description Dibuja un gráfico de barras representando la longitud de los senderos proporcionados.
   * 
   * @param {Trail[]} trails - Lista de senderos para representar en el gráfico.
   */
  public draw(trails: Trail[]): void {
    const width = this.canvas.width - 2 * this.MARGIN_SIDES;
    const height = this.canvas.height - this.MARGIN_TOP - this.MARGIN_BOTTOM;
    const rawMax = Math.max(...trails.map(t => t.LONGITUD));
    const yMax = Math.ceil(rawMax / 1000) * 1000; 
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.drawHeaders();
    this.drawGrid(yMax, height, width);
    this.drawBars(trails, yMax, height, width);
  }

  /**
   * @description Dibuja los encabezados del gráfico, incluyendo el título coordinateY las etiquetas de los ejes.
   */
  private drawHeaders(): void {
    this.context.textAlign = 'left';
    this.context.fillStyle = 'black';
    this.context.font = 'bold 24px Arial';
    this.context.fillText('Longitud de Senderos', this.MARGIN_SIDES, 40);
  }

  /**
   * @description Dibuja una cuadrícula de fondo.Y.
   * 
   * @param {number} yMax - Valor máximo del eje Y.
   * @param {number} drawHeight - Altura del área de dibujo.
   * @param {number} drawWidth - Anchura del área de dibujo.
   */
  private drawGrid(yMax: number, drawHeight: number, drawWidth: number): void {
    const steps = 5;
    this.context.strokeStyle = this.GRID_COLOR;
    this.context.font = '12px Arial';
    this.context.textAlign = 'right';
    for (let i = 0; i <= steps; ++i) {
      const value = (yMax / steps) * i;
      const coordinateY = (this.MARGIN_TOP + drawHeight) - (i * (drawHeight / steps));
      this.context.beginPath();
      this.context.moveTo(this.MARGIN_SIDES, coordinateY);
      this.context.lineTo(this.MARGIN_SIDES + drawWidth, coordinateY);
      this.context.stroke();
      this.context.fillStyle = this.TEXT_COLOR;
      this.context.fillText(Math.round(value).toLocaleString('es-ES'), this.MARGIN_SIDES - 15, coordinateY + 4);
    }
  }

  /**
   * @description Método principal de dibujo de barras que orquesta el bucle.
   * 
   * @param {Trail[]} trails - Lista de senderos a representar.
   * @param {number} yMax - Valor máximo del eje Y para escalar las barras.
   * @param {number} drawHeight - Altura del área de dibujo para calcular la altura de las barras.
   * @param {number} drawWidth - Anchura del área de dibujo para calcular el ancho coordinateY espaciado de las barras.
   */
  private drawBars(trails: Trail[], yMax: number, drawHeight: number, drawWidth: number): void {
    const barSpacing = trails.length > 20 ? 8 : 15;
    const barWidth = (drawWidth / trails.length) - barSpacing;
    trails.forEach((trail, index) => {
      const coordinateX = this.MARGIN_SIDES + index * (barWidth + barSpacing);
      const barHeight = (trail.LONGITUD / yMax) * drawHeight;
      const coordinateY = (this.MARGIN_TOP + drawHeight) - barHeight;
      this.drawSingleBar(coordinateX, coordinateY, barWidth, barHeight);
      const axisY = this.MARGIN_TOP + drawHeight;
      this.drawBarLabel(trail.NOM_TRAMO, coordinateX, barWidth, axisY, trails.length);
    });
  }

  /**
   * @description Dibuja una única barra en el canvas.
   * 
   * @param {number} coordinateX - Coordenada X de la barra.
   * @param {number} coordinateY - Coordenada Y de la barra (parte superior).
   * @param {number} width - Ancho de la barra.
   * @param {number} height - Altura de la barra.
   */
  private drawSingleBar(coordinateX: number, coordinateY: number, width: number, height: number): void {
    this.context.fillStyle = this.BAR_COLOR;
    this.context.fillRect(coordinateX, coordinateY, width, height);
  }

  /**
   * @description Dibuja la etiqueta de texto rotada debajo de la barra, estilo OCDE.
   * 
   * @param {string} name - Nombre del sendero a mostrar en la etiqueta.
   * @param {number} coordinateX - Coordenada X de la barra para posicionar la etiqueta.
   * @param {number} barWidth - Ancho de la barra para centrar la etiqueta.
   * @param {number} totalElements - Número total de elementos para ajustar el tamaño del texto si es necesario.
   */
  private drawBarLabel(name: string, coordinateX: number, barWidth: number, axisY: number, total: number): void {
    this.context.save();
    this.context.translate(coordinateX + barWidth / 2, axisY + 15);
    this.context.rotate(Math.PI / 4); 
    this.context.textAlign = 'left';
    this.context.textBaseline = 'middle';
    this.context.fillStyle = this.TEXT_COLOR;
    this.context.font = total > 20 ? '10px Arial' : '12px Arial';
    const maxChars = name.length > 25 ? 15 : 25;
    const label = name.length > maxChars ? name.substring(0, maxChars - 3) + '...' : name;
    this.context.fillText(label, 0, 0);
    this.context.restore();
  }
}