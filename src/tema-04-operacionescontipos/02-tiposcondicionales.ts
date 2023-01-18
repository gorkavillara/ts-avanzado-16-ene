const miNota = 6

console.log(miNota > 5 ? "He aprobado" : "He suspendido")

// UnTipo extends OtroTipo ? TipoVerdadero : TipoFalso

type SiStringEsIgualANumber = string extends number ? true : false

// Utilizando genéricos
type SiEsIgualANumber<T> = T extends number ? true : false

type A = SiEsIgualANumber<string>
type B = SiEsIgualANumber<number>
type C = SiEsIgualANumber<588>

///// Ejemplo más real

type MiTipoDevolucion<T> = 
    T extends () => any     // Si T es una función
        ? T                 // Devuelve ese mismo tipo
        : () => T           // Si no, devuelve una función que retorne ese tipo

type DevolucionDeNumeros = MiTipoDevolucion<() => number[]>
type TipoString = MiTipoDevolucion<string>

/// Tipos inferidos
let miNuevaVariable

miNuevaVariable = [true, false]

miNuevaVariable // Tipo inferido boolean[]

// tipos genéricos inferidos
type ArrayItems<T> =
    T extends (infer Item)[]
        ? Item
        : T

type StringItem = ArrayItems<string>            // Tipo string

type StringArrayItem = ArrayItems<string[]>     // Tipo string

type StringMatrixItem = ArrayItems<string[][]>  // Tipo string[]

///////////////
// Mapeo de tipos condicionales

type convierteTodoAFuncion<T> = {
    [K in keyof T]-?: T[K] extends (...args: any[]) => any // Cada uno de los tipos devuelve una función?
        ? T[K]                  // Si sí, devuelve el mismo tipo
        : () => T[K]            // Si no, devuelve una función que devuelva su tipo
}


type tiposFunciones = convierteTodoAFuncion<{
    nombre: string,
    isDeveloper?: boolean,
    obtenNombre: () => string,
    nombreTipo: "cadena de texto"
}>

export {}