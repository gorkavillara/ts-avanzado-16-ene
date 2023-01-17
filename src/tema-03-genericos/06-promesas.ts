// El tipo del constructor de promesas hace referencia a la resolución de resolve

// class LaPromesa<Valor> {
//     constructor(
//         executor: (
//             resolve: (valor: Valor) => void,
//             reject: (error: unknown) => void
//         ) => void
//     )
// }

const miPromesa = new Promise((resolve, reject) => {
    setTimeout(() => resolve(12), 1000)
})

const miPromesaEnString = new Promise<string>((resolve) => {
    setTimeout(() => resolve("Hola que tal"), 1000)
})

miPromesaEnString.then(respuesta => respuesta.length)
miPromesaEnString.then(respuesta => respuesta.toFixed(2))

miPromesa.then(respuesta => typeof respuesta === "string" ? respuesta.length : null)

export {}