const factorialConError = (a: number) => {
    if (a <= 0) throw new Error("El número debe ser positivo y mayor que cero")
    let factorial = 1
    for (let i = a; i > 1; i--) {
        factorial *= i
    }
    return factorial
}

it("Factorial con error funciona correctamente", () => {
    expect(factorialConError(6)).toBe(720)
})

it("Factorial con error lanza un error cuando le pasamos un número negativo", () => {
    // const miFactorial = factorialConError(-10)

    // expect(true).toBeTruthy()
    expect(
        () => factorialConError(-10)
    ).toThrowError()
})
