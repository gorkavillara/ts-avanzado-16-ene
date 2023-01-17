// InstanceOf => (objetos de clase)
class Animal {
    respira() {
        console.log("Soy un animal y respiro")
    }
}

class Perro extends Animal {
    ladra() {
        console.log("Los perros ladramos")
    }
}

class Gato extends Animal {
    maulla() {
        console.log("Los gatos maullamos")
    }
}

const miPerro = new Perro()
miPerro.ladra()

const miGato = new Gato()
miGato.maulla()

const obtenAnimalAlAzar = () => Math.random() > 0.5 ? new Perro() : new Gato()

const miMascota = obtenAnimalAlAzar()

if (miMascota instanceof Perro) {
    miMascota.ladra()
} else if (miMascota instanceof Gato) {
    miMascota.maulla()
}

// TypeOf => (variables/constantes) tipos primitivos como para alias de tipos
const hazUnaLlamadaALaAPI = () => Math.random() > 0.5 ? "Hola" : 12
const resultado: unknown = hazUnaLlamadaALaAPI()

const miNombre = "Gorka"
let miNombreLet: string | number = "Gorka"
miNombreLet = 34

if (typeof resultado === "string") {
    console.log(resultado.toUpperCase())
} else if (typeof resultado === "number") {
    console.log(resultado.toFixed(2))
}

// In => Objetos para hacer referencia a las keys
// Persona => ID nombre
// Alumno => ID numeroClase
// Adulto => ID dni
interface Persona {
    nombre: string
    edad: number
}
interface Alumno {
    nombre: string
    numeroClase: number
}
interface Adulto {
    nombre: string
    dni: string | number
}

const leire: (Persona | Alumno | Adulto) = {
    nombre: "Leire",
    dni: 21561815
}
const gorka: (Persona | Alumno | Adulto) = {
    nombre: "Gorka",
    edad: 23
}

const obtenId = (persona: (Persona | Alumno | Adulto)): (string | number) => {
    if ("edad" in persona) return persona.nombre
    if ("numeroClase" in persona) return persona.numeroClase
    return persona.dni
}

console.log(`Id: ${obtenId(leire)}`)

// Keyof
const obtenValor = <T, K extends keyof T>(objeto: T, key: K) => objeto[key]

console.log(obtenValor(gorka, "edad"))

// Keyof + typeof // TO-DO: Revisar ejemplo disponible
const obtenValor2 = <T, K extends keyof T>(objeto: T, key: K) => objeto[key]
const miValor = obtenValor2(gorka, "nombre")

if (typeof miValor === "string") {
    console.log(miValor.toUpperCase())
} else if (typeof miValor === "number") {
    console.log(miValor.toFixed(2))
}

export {}