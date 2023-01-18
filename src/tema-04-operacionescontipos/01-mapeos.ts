// Introducción al mapeo de tipos
// Sintaxis
// type NuevoTipo = {
//     [K in TipoOriginal]: TipoPropiedad
// }

type Animal = "Perro" | "Gato" | "Loro"

type ContabilidadAnimal = {
    [K in Animal]: number
}
// Equivalente a
// type ContabilidadAnimal = {
//     Perro: number,
//     Gato: number,
//     Loro: number
// }

interface VariantesAnimales {
    perros: number,
    gatos: boolean[],
    babuinos: () => null
}

type ContabilidadAnimal_2 = {
    [K in keyof VariantesAnimales]: string
}

type AnimalesNulables = {
    [K in keyof VariantesAnimales]: VariantesAnimales[K] | null
}

//// Modificadores de acceso
// ?        - Declara una propiedad como opcional
// readonly - Declara una propiedad como sólo lectura

// AÑADIENDO MODIFICADORES
type AnimalesOpcionales = {
    [K in keyof VariantesAnimales]?: VariantesAnimales[K]
}

type AnimalesSoloLectura = {
    readonly [K in keyof VariantesAnimales]: VariantesAnimales[K]
}

///////////
// ELIMINANDO MODIFICADORES
interface Coche {
    readonly marca: string,
    modelo: string,
    caballos?: number
}

type CocheEstricto = {
    [K in keyof Coche]-?: Coche[K]
}

type CocheModificable = {
    -readonly[K in keyof Coche]: Coche[K]
}

/////////////
// Tipos genéricos mapeados

// function hazloSoloLectura(input) {
    // Le hacemos cosas al input
// }

type HazloSoloLectura<T> = {
    readonly [K in keyof T]: T[K]
}

interface Trabajador {
    nombre: string,
    numSS: number
}

type TrabajadorSoloLectura = HazloSoloLectura<Trabajador>

type HazloTodoOpcional<T> = {
    [K in keyof T]?: T[K]
}

type TrabajadorOpcional = HazloTodoOpcional<Trabajador>

export {}