const creaSeparador = () => console.log("------------------")

type Nulable<T> = T | null | undefined

type MiFuncion<Input, Output> = (input: Input) => Output

const funcionPropia: MiFuncion<string, number> = (texto) => texto.length

funcionPropia(12) // Error

creaSeparador()

/////////
// Tipos por defecto
interface Frase<T = string> {
    texto: T
}

let frase: Frase<number> = {
    texto: 13432349
}

// podemos igualarlos a otros tipos genéricos
interface ParClaveValor<Key, Value = Key> {
    key: Key,
    value: Value
}

const miClaveValor: ParClaveValor<string> = {
    key: "Hola",
    value: "Adiós"
}

// Tener cuidado a la hora de ordenar estos tipos genéricos por defecto
function cuidadoConElOrdenErroneo<Primero, Segundo = string, Tercero>() {} // ❌ Error
function cuidadoConElOrdenCorrecto<Primero, Segundo, Tercero = number>() {} // ✅ Correcto

export {}