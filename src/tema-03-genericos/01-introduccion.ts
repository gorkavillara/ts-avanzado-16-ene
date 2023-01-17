function miIdentidad<T>(valor: T): T {
    return valor
}

const miPrimerValor = miIdentidad(12)
const miSegundoValor = miIdentidad("Hola")
const miTercerValor = miIdentidad<boolean>(false)

function logueaFuncion<Input>(callback: (input: Input) => void) {
    return (input: Input) => {
        console.log(`Input: ${input}`)
        callback(input)
    }
}

logueaFuncion((input: unknown) => {
    if (typeof input === "string") {
        console.log(input.length)
    }
})
logueaFuncion((input: string) => {
    console.log(input.length)
})
const miFuncionGuay = logueaFuncion<string>((input) =>
    console.log(input.length)
)
logueaFuncion<boolean>((input) => console.log(input.length))

miFuncionGuay("Hola")

///// Parámetros múltiples
function devuelvePar<Key, Value>(key: Key, value: Value) {
    return {
        key,
        value,
    }
}

console.log(devuelvePar("hola", 123))

console.log(devuelvePar<number, boolean>(12, false))

console.log(devuelvePar<"Hola" | "Adiós", true>("Adiós", true))

devuelvePar<string, unknown>("hola", true)

export {}
