import { factorial } from "./funciones"

const misValores = [1, 2, 3, 4, 5]
const misExpects = [1, 2, 6, 24, 120]

misValores.forEach((valor, index) => {
    const factorialEsperado = misExpects[index]
    test(`El factorial de ${valor} debería ser ${factorialEsperado}`, () => {
        expect(factorial(valor)).toBe(factorialEsperado)
    })
})