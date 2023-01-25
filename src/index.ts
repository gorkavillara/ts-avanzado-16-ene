import { factorial } from "./controllers";
import { Libro } from "./models";

const miLibro = new Libro("La caída de los gigantes", "Ken Follet")

miLibro.obtenDatos()