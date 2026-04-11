/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Lucas_de-Vera_Gil
 * @since Mar 19 2026
 * @desc Trail Data Source
 *      Este programa define la clase TrailDataProcessor, que se encarga de obtener y procesar los datos de senderos para su posterior visualización en un gráfico de barras.
 * @see {@link https://mathieularose.com/main-function-in-node-js}
 */

'use strict';

import { Trail } from './bar-chart.js';

export interface Data {
  docs: Trail[];
}

export class TrailDataSource {
  private readonly endpoint: string = '/data';

  /**
   * @description Obtiene los datos crudos desde el endpoint.
   * 
   * @return {Promise<Trail[]>} Una promesa que resuelve con un array de senderos.
   */
  public async fetchTrails(): Promise<Trail[]> {
    try {
      const response = await fetch(this.endpoint);
      if (!response.ok) {
        throw new Error(`Error al acceder a los datos: ${response.statusText}`);
      }
      const data = await response.json() as Data;
      return data.docs;
    } catch (error) {
      console.error("Error en TrailDataSource:", error);
      return [];
    }
  }
}
