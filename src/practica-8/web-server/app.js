/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author F. de Sande
 * @since Mar 25, 2023
 *        Updated Mar 21 2024
 * @description This code sets up a static file server in an Express.js application 
 *              by telling Express to serve static files from a specific directory on the file system.
 * @see {@link https://expressjs.com/en/starter/static-files.html}
 * @see {@link https://www.digitalocean.com/community/tutorials/nodejs-serving-static-files-in-express}
 * @see {@link https://github.com/nodejs/help/issues/2907#issuecomment-757446568}
 */


import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from 'fs/promises'; 

const app = express();
app.set('port', 8080);

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.get('/data', async (req, res) => {
  try {
    const filePath = path.join(__dirname, '../aemet/LaLaguna.json');
    const content = await fs.readFile(filePath, 'utf-8');
    res.json(JSON.parse(content));
  } catch (error) {
    console.error('Error al leer estaciones.json:', error);
    res.status(500).send('Error interno del servidor');
  }
});

app.use(express.static(path.join(__dirname, '../')));

app.listen(app.get('port'), '0.0.0.0', function () {
  console.log('Server running on http://localhost:' + app.get('port'));
});
