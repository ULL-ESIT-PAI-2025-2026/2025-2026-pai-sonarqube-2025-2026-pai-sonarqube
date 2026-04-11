/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Lucas_de-Vera_Gil
 * @since Mar 19 2026
 * @desc Trail Data Processor
 *      Este programa define la clase TrailDataProcessor, que se encarga de obtener y procesar los datos de senderos para su posterior visualización en un gráfico de barras.
 * @see {@link https://mathieularose.com/main-function-in-node-js}
 */

'use strict';

import { Trail } from './bar-chart.js';

export class TrailDataProcessor {
  /**
   * @description Agrega las longitudes de senderos con el mismo nombre.
   * 
   * @param {Trail[]} allTrails - Array de senderos crudos obtenidos del endpoint.
   * @return {Trail[]} Array de senderos únicos con sus longitudes agregadas.
   */
  public aggregateTrailsByName(allTrails: Trail[]): Trail[] {
    let uniqueList: Trail[] = [];
    for (let i = 0; i < allTrails.length; ++i) {
      const currentName = allTrails[i].NOM_TRAMO ? allTrails[i].NOM_TRAMO.trim() : "Sin nombre";
      const currentLength = Number(allTrails[i].LONGITUD);
      let foundIndex = -1;
      for (let j = 0; j < uniqueList.length; ++j) {
        if (uniqueList[j].NOM_TRAMO === currentName) {
          foundIndex = j;
          break;
        }
      }
      if (foundIndex >= 0) {
        uniqueList[foundIndex].LONGITUD += currentLength;
      } else {
        uniqueList.push({
          NOM_TRAMO: currentName,
          LONGITUD: currentLength
        });
      }
    }
    return uniqueList;
  }

  /**
   * @description Selecciona los senderos más largos mediante algoritmo de selección.
   * @param {Trail[]} uniqueTrails - Array de senderos únicos.
   * @param {number} count - Número de senderos más largos a seleccionar.
   * @return {Trail[]} Array de senderos más largos.
   */
  public selectTopLongest(uniqueTrails: Trail[], count: number): Trail[] {
    let source = [...uniqueTrails];
    let result: Trail[] = [];
    const iterations = Math.min(count, source.length);

    for (let i = 0; i < iterations; ++i) {
      let maxIndex = 0;
      for (let j = 1; j < source.length; ++j) {
        if (source[j].LONGITUD > source[maxIndex].LONGITUD) {
          maxIndex = j;
        }
      }
      result.push(source[maxIndex]);
      source.splice(maxIndex, 1);
    }
    return result;
  }
}