const miNombre = "Gorka"
const saludo = `Hola ${miNombre}`

type Animal = "Perro" | "Gato" | "Loro"


type Saludo = `Hola ${string}`

const miSaludo: Saludo = "Hola Iñaki cualquier cosa"
const miNoSaludo: Saludo = "Adiós Iñaki cualquier cosa" // Error

////////////
// Tienda de camisetas
type Color = "Rojo" | "Azul" | "Verde" | "Blanco" | "Negro"
type Talla = "XS" | "S" | "M" | "L" | "XL"
type Articulo = "Camiseta" | "Pantalón" | "Ropa Interior" | "Sudadera" | "Jersey" | "Vestido" | "Complemento"

type Identificador = `${Articulo}: ${Color} - ${Talla}`

let miIdentificador: Identificador = "Pantalón: Azul - XS"
miIdentificador = "Verde - Amarillo"

// class = "flex flex-col justify-center bg-red-400 text-blue-50"

type Resource = "bg" | "text"
type TWColor = "red" | "blue" | "green" | "yellow" | "magenta" | "cyan"
type Intensity = "50" | "100" | "200" | "300" | "400"

type TWClass = `${Resource}-${TWColor}-${Intensity}`