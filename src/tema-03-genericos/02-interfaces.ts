interface Persona<T> {
    nombre: string
    dni: T
}

const personaStr: Persona<string> = {
    nombre: "",
    dni: "1231241223"
}
personaStr.dni.length
const personaNm: Persona<number> = {
    nombre: "",
    dni: 1231241223
}
// personaNm.dni.length

interface Nodo<Value> {
    siguienteNodo?: Nodo<Value>
    value: Value
}

// Nodo1 -> Nodo2 -> Nodo3 -> Nodo4 -> ....... -> UltimoNodo

function obtenUltimoNodo<Value>(nodo: Nodo<Value>): Value {
    return nodo.siguienteNodo ? obtenUltimoNodo(nodo.siguienteNodo) : nodo.value
}

const miCoche: Nodo<string> = {
    value: "Type-R",
    siguienteNodo: {
        value: "VW 600",
        siguienteNodo: {
            value: "Tesla Model X"
        }
    }
}

console.log(obtenUltimoNodo(miCoche))

export {}