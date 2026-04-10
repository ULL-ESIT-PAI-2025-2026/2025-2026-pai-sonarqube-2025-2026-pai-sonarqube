/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Andrés Riera
 * @since April 10 2026
 * @desc Process function data
 *
 */

export function processUserStatus(status: string, age: number, role: string) {
  if (status === "active") {
    if (age > 18) {
      if (role === "admin") {
        console.log("Full access granted");
      } else {
        // SonnarQube issue: 'If' statement should not be the only statement in 'else' block
        if (role === "editor") {
          console.log("Partial access granted");
        } else {
          console.log("Visitor access");
        }
      }
    } else {
      console.log("Underage user");
    }
  } else {
    console.log("Inactive account");
  }
}

export function processGuestStatus(status: string, age: number, role: string) {
  if (status === "active") {
    if (age > 18) {
      if (role === "admin") {
        console.log("Full access granted");
      } else {
        // SonnarQube issue: 'If' statement should not be the only statement in 'else' block
        if (role === "editor") {
          console.log("Partial access granted");
        } else {
          console.log("Visitor access");
        }
      }
    } else {
        console.log("Underage user");
    }
  }
}