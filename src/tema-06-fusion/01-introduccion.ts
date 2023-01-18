// Fusión de interfaces

interface Primera {
    x: number
}

interface Segunda {
    y: number | string | boolean[]
}

//@ts-ignore -> mala práctica
interface Fusionada extends Primera, Segunda {
    y: string, // Definir un subconjunto del original
    z: number
}

let miObjetoFusionado: Fusionada = {
    x: 5,
    y: "15",
    z: 12
}

// Fusión de Namespaces
namespace miEspacio {
    export const miConstante = "Gorka"

    export const saluda = (nombre: string) => {
        console.log(`Hola ${nombre}`)
    }

    saluda(miConstante)
}

const miConstante = 12

miEspacio.miConstante

miEspacio.saluda("Paco")

namespace miSegundoEspacio {
    export const miNombre = "Gorka"
}

//////////////////
// fusión de namespaces con clases funciones y enumerados

class Persona {
    nombre: string
    constructor(n: string) {
        this.nombre = n
    }

    static saluda(nombre: string) { 
        console.log(`Hola ${nombre} desde la clase`)
    }
}

namespace Persona {
    export function saluda(nombre: string) {
        console.log(`Hola ${nombre} desde el namespace`)
    }
}

let miPersona = new Persona("Ernesto")

console.log(miPersona.nombre)

Persona.saluda(miPersona.nombre)

export {}