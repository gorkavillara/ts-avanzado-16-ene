// CUSTOM TYPEGUARDS
// Sin predicado
const isString = (val: unknown) => typeof val === "string" // true cuando sea string | false cuando no sea string
const devuelveValor = (): number | string => Math.random() > 0.5 ? "Hola" : 10

const miValor = devuelveValor()

if (isString(miValor)) {
    // Aquí voy a hacer cosas de strings
    //@ts-ignore
    miValor.length
}

// Con predicado
const isRealString = (val: unknown): val is string => typeof val === "string"

if (isRealString(miValor)) {
    miValor.toLowerCase()
}

export {}