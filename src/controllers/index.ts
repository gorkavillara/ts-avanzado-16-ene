export const factorial = (num: number): number => {
    let fact = 1
    for (let i = num; i > 1; i--) {
        fact *= i
    }
    return fact
}