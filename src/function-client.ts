/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Andrés Riera
 * @since April 10 2026
 * @desc Function client
 *
 */

const userId = "123";

export function getClientData(userId: string) {
  let data: any = "fetched data"; 
  if (userId == null) { 
    console.log("No ID provided");
  }
  return data;
  // SonnarQube issue: Unreachable code
  console.log("This will never be executed"); 
}

export function logConnection() {

}