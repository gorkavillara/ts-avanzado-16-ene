interface Persona {
    nombre: string
    edad: number
}

interface Adulto {
    nombre: string
    edad: number
    dni?: number | string
}

const yo: Persona = {
    nombre: "Gorka",
    edad: 28
}

const obtenNombreDeAdulto = (adulto: Adulto) => adulto.nombre

console.log(obtenNombreDeAdulto(yo as Adulto))
console.log(obtenNombreDeAdulto(<Adulto>yo))

//////////////////
// Assertion de no-nulo
const miBoton = document.querySelector("#dummy-btn")! as HTMLButtonElement

miBoton.onmouseover = () => console.log("Mouse Over")

export {}