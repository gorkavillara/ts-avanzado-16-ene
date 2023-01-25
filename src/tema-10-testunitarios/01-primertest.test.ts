import { suma, factorial } from "./funciones"

// Aquí escribimos todos nuestros tests
// No solo sintaxis de test, sino también estamos utilizando typescript

// Nuestro primer test
test("Mi primer test", () => {
    // Nuestra lógica
    expect(true).toBeTruthy()
    expect(false).toBeFalsy()
})

////////
// Funcionalidad de suma
describe("Grupo de tests para testear la función suma", () => {
    test("La suma, suma correctamente", () => {
        expect(suma(1, 2)).toBe(3)
    })
    test("La suma, no da errores", () => {
        expect(suma(4, 9)).not.toBe(10)
    })
    fit("Never is null", () => { // Forzando a que se ejecute
        expect(suma(0, 0)).not.toBeNull()
    })
})


describe("Testeando la funcionalidad factorial", () => {
    test.only("Factorial de 5 es 120", () => {
        expect(factorial(5)).toBe(120)
    })
    it("Factorial de 0 es null", () => {
        expect(factorial(0)).toBeNull()
    })
    it("Factorial de un número negativo es null", () => {
        expect(factorial(-10)).toBeNull()
    })
})

fdescribe("Testeando strings", () => {
    it("Un string es igual a otro", () => {
        expect("Hola").toEqual("Hola")
    })
    xit("Otro string no es igual a otro string", () => {
        expect("Adiós").not.toEqual("Hola")
    })
})