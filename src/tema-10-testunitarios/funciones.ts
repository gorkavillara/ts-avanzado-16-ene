export const suma = (a: number, b: number) => a + b

export const factorial = (a: number) => {
    if (a <= 0) return null
    let factorial = 1
    for (let i = a; i > 1; i--) {
        factorial *= i
    }
    return factorial
}

export const factorialConError = (a: number) => {
    if (a <= 0) throw new Error("El número debe ser positivo y mayor que cero")
    let factorial = 1
    for (let i = a; i > 1; i--) {
        factorial *= i
    }
    return factorial
}
