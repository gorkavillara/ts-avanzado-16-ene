import { factorial } from "./controllers";
import { Libro } from "./models";

const miLibro = new Libro("El imperio final", "Brandon Sanderson")

miLibro.obtenDatos()

console.log(factorial(15))