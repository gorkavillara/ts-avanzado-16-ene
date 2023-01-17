interface ConLength {
    length: number
}

function devuelveLength<Input extends ConLength>(input: Input) {
    console.log(`La longitud es ${input.length}`)
}

devuelveLength("Hola mi nombre es gorka")
devuelveLength([1, 2, 3, 4, 5, 6])
devuelveLength({ nombre: "TypeR", length: 4 })

devuelveLength(new Date())

const creaSeparador = () => console.log("------------------")
// Trabajando con KeyOf

function obtenValor<T, Key extends keyof T>(objeto: T, key: Key) {
    return objeto[key]
}
console.log(
    obtenValor({ nombre: "Type R", marca: "Honda" }, "nombre")
)

export {}