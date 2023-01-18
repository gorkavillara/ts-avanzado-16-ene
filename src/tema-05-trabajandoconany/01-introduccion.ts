const obtenVariable = (): boolean | string => Math.random() > 0.5 ? true : "Hola"

const procesaVariable = (input: string) => input.length

function miFuncion() {
    let x = obtenVariable() // Sé que esta variable SIEMPRE va a retornar un string
    
    procesaVariable(x)
}

// Opción 1 - definir x como any
function miFuncion01() {
    let x: any = obtenVariable() // Sé que esta variable SIEMPRE va a retornar un string
    procesaVariable(x)

    // Todos los métodos o funcionalidades que realice con x NO VAN A ESTAR CHEQUEADOS
}

// Opción 2 - utilizando un assertion
function miFuncion02() {
    let x = obtenVariable()
    procesaVariable(x as any)

    // Todos los métodos y funcionalidades SEGUIRÁN ESTANDO CHEQUEADOS
}

// Opción 3 - utilizando @ts-ignore
function miFuncion03() {
    let x = obtenVariable()
    //@ts-ignore
    procesaVariable(x)
}

/////// Propiedades -> utilizar any
const obtenRol = () => Math.random() > 0.5 ? "admin" : false

const miRol = obtenRol()

type Config = { 
    dark: boolean,
    username: string,
    role: {
        name: string
    }
}

const config: Config = {
    dark: true,
    username: "gorkavillar",
    role: {
        name: miRol
    }
}

// Opción 1 - Podríamos "castear" esta config en un any
const config2: Config = {
    dark: true,
    username: "gorkavillar",
    role: {
        name: miRol
    }
} as any

// Opción 2 - Podríamos asignar any a cualquier propiedad
const config3: Config = {
    dark: false,
    username: "gorkavi",
    role: {
        name: miRol as any
    }
}

export {}