// Seguiremos trabajando con any
// Pero de forma más segura
// Trabajando con arrays de any

const obtenLongitud = (array: any) => array.length

const miLongitud = obtenLongitud(["hola", "me", "llamo", "Gorka"])
// miLongitud.toUpperCase() // NO ERROR EN COMPILACIÓN -> PERO SÍ EN EJECUCIÓN

// obtenLongitud(true) // No error
 
const obtenLongitudMejor = (array: any[]) => array.length

const miLongitudMejor = obtenLongitudMejor(["hola", "me", "llamo", "Gorka"])
miLongitudMejor.toFixed(2)

// obtenLongitudMejor(true) // ❌ Error

// Tipado de objetos
const miObjeto = {
    nombre: "GorkaVillar1",
    edad: 21,
    direccion: "Calle Amezketa 22, "
}

const tieneClaveConDoceCaracteres = (obj: any) => {
    for (const key in obj) {
        if (obj[key].length === 12) {
            console.log(key, obj[key])
            return true
        }
    }
    return false
}

// Opción 2
const tieneClaveConDoceCaracteresMejor = (obj: object) => {
    for (const key in obj) {
        if (obj[key].length === 12) {
            console.log(key, obj[key])
            return true
        }
    }
    return false
}

// Opción 3
const tieneClaveConDoceCaracteresInclusoMejor = (obj: { [key: string]: any }) => {
    for (const key in obj) {
        if (key.length === 12) {
            console.log(key, obj[key])
            return true
        }
    }
    return false
}
const miSimbol = Symbol("hola")

const miObjeto2 = {
    miNombre: "Gorka",
    miMovil: 617888888,
    "mi-direccion": "Calle lo que sea",
    [miSimbol]: true
}

const miResultado = tieneClaveConDoceCaracteresInclusoMejor(miObjeto2)

// Tipado de funciones con any

type miFuncion = any
type miFuncionMejor = () => any
type miFuncionTodaviaMejor = (args: any) => any
type miFuncionMuchoMejor = (...args: any[]) => any


// Ejemplos de tipado de funciones
const obtenNumArgumentos = (...args: any) => args.length
const obtenNumArgumentosMejor = (...args: any[]) => args.length