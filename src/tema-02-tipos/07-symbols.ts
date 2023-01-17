let a = Symbol("aquí viene la descripción") // Valor único
let b = Symbol("aquí viene la descripción")

console.log(a === b) // false
console.log(a === a) // true
console.log(a.description === b.description) // true

console.log(a.toString())

a = Symbol("Otra descripción")

/// Unique symbols
const valor = 27
const miSimbolo: unique symbol = Symbol("Mi símbolo único")

console.log(typeof miSimbolo)

export {}
