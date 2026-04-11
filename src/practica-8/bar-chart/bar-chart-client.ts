/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Lucas_de-Vera_Gil
 * @since Mar 19 2026
 * @desc Bar Chart Client
 *      Este programa define la clase Main, que es el punto de entrada de la aplicación.
 * @see {@link https://mathieularose.com/main-function-in-node-js}
 */

'use strict';

import { BarChart } from './bar-chart.js';
import { TrailDataProcessor } from './traildataprocesor.js';
import { TrailDataSource } from './traildatasourse.js';

export async function main(): Promise<void> {
  const dataSource = new TrailDataSource();
  const dataProcessor = new TrailDataProcessor();
  const chart = new BarChart('canvas');
  const rawTrails = await dataSource.fetchTrails();
  const uniqueTrails = dataProcessor.aggregateTrailsByName(rawTrails);
  const topTrails = dataProcessor.selectTopLongest(uniqueTrails, 20);
  chart.draw(topTrails);
}

main();