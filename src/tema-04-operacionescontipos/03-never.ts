const obtenUnError = () => {
    throw new Error("Siempre voy a lanzar un error")

    let miVariable = "Nunca voy a ejecutar este código"
    return miVariable
}

const obtenErrorMejor = (): never => {
    throw new Error("Esta es una mejor manera de definir una función que devuelva errores")

    return true // Error: type boolean is not assignable to type never
}

/// Funciones que nunca finalizan de manera normal
// Bucles infinitos o llamadas recursivas sin fin

const miBucleInfinito = () => {
    while(true) {
        // Aquí pasan cosas
    }
    let miVariable = "Nunca voy a ejecutar este código"
    return miVariable
}

const miBucleInfinitoMejor: (() => never) = () => {
    while(true) {
        // Aquí van a seguir pasando cosas
    }
    let miVariable = [/12345/, ""]
    return miVariable
}

/// Bloques de código que nunca se ejecutan
// if false
const bloqueNuncaEjecuta = (input: any) => {
    if (typeof input === "never") {
        // Este código queremos que nunca se ejecute
    }
}

/// Al tipar valores de error

let estadoErrorAplicacion: never | null = null

export {}