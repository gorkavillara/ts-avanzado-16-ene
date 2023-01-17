// A través de los built in symbols
// podemos modificar el comportamiento de objetos

import console from "console"
import console from "console"
import console from "console"

// 1 - Symbol.hasInstance
class MiClase {
    static [Symbol.hasInstance](instance: any) {
        return instance.hasOwnProperty("miPropiedad")
    }
}

const unObjetoCualquiera = { altura: 25, base: 10 }
// console.log(unObjetoCualquiera instanceof MiClase)
console.log(new MiClase() instanceof MiClase)

const miObjeto = { miPropiedad: "Lo que quiera" }
console.log(miObjeto instanceof MiClase)

// 2 - Symbol.isConcatSpreadable
const miArray: number[] = [1, 2, 3, 4, 5]

const miSegundoArray = {
    [Symbol.isConcatSpreadable]: true,
    0: "Hola",
    1: "Mundo",
    length: 2
}

//@ts-ignore
console.log([].concat(miArray, miSegundoArray)) // TS2769 ????

// 3 - Symbol.iterator
const iterator = miArray[Symbol.iterator]()
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())

// 02 + 03 => Symbol.isConcatSpreadable + Symbol.iterator
class ArrayCustom {
    [Symbol.isConcatSpreadable]!: boolean

    valores: any[]
    constructor(...vals: any[]) {
        this.valores = vals
        this[Symbol.isConcatSpreadable] = true
    }

    [Symbol.iterator]() {
        let i = 0
        return {
            next: () => {
                const devolucion = {
                    value: this.valores[i],
                    done: i === this.valores.length
                }
                i++
                return devolucion
            }
        }
    }
}

const miArrayCustom = new ArrayCustom("Hola", "mundo", "soy", "Gorka")
const iteratorCustom = miArrayCustom[Symbol.iterator]()
console.log(iteratorCustom.next())
console.log(iteratorCustom.next())
console.log(iteratorCustom.next())
console.log(iteratorCustom.next())
console.log(iteratorCustom.next())

const nuevoArray = [1, 2, 3, ...miArrayCustom]

console.log("Nuevo Array", nuevoArray)

// 4 - Symbol.match
const miStr = "Hola soy gorka"

class MiRExp extends RegExp {
    [Symbol.match](str: string) {
        let result = RegExp.prototype[Symbol.match].call(this, str)
        return result ? true : false
    }
}

console.log("16/01/2023".match(new MiRExp("([0-9]+)/([0-9]+)/([0-9]+)")))
console.log("16/01/2023".match(new MiRExp("hola")))

// 5 - Symbol.replace
console.log(miStr.replace("soy", "era"))
const miVariable = "obtenValor"
class MiReplace {
    valor: string
    constructor(valor: string) {
        this.valor = valor
    }
    [miVariable]() {
        return this.valor
    }
    [Symbol.replace](valorPasado: string) {
        return `Antes: ${valorPasado}, ahora: ${this.valor}`
    }
}
console.log("Hola".replace(new MiReplace("Adiós")))
const miRep = new MiReplace("Gorka")
console.log(miRep.obtenValor())

// 6 - Symbol.search
class MiBusqueda {
    value: any
    constructor(value: any) {
        this.value = value
    }
    [Symbol.search](str: string) {
        return `La búsqueda se encuentra en la posición ${str.indexOf(this.value)}`
    }
}

const miSegundoStr = "Hola mundo, me llamo Gorka"
//@ts-ignore
console.log(miSegundoStr.search(new MiBusqueda("Gorka")))

// 7 - Symbol.species
class MiArray extends Array {
    static get [Symbol.species]() {
        return Array
    }
}

const miArrayPropio = new MiArray(5).fill(undefined)
console.log({ miArrayPropio })
// const miArrayPropioDerivado = [...miArrayPropio].map(x => "Hola")
const miArrayPropioDerivado = miArrayPropio.map(x => "Hola")
console.log({ miArrayPropioDerivado })

console.log(miArrayPropioDerivado instanceof MiArray) // false
console.log(miArrayPropioDerivado instanceof Array) // true

// 8 - Symbol.split
const unString = "1 - Nahuel - Verdecchia"
console.log(unString.split(" - "))

// TO-DO: Cambiar comportamiento para valores de numSplits variables
class NumeroSplits {
    value: string
    numSplits: number
    constructor(s: string, n: number) {
        this.value = s
        this.numSplits = n
    }
    [Symbol.split](str: string) {
        const arrayReturn = []
        const pos = str.indexOf(this.value)
        if (pos !== -1) {
            arrayReturn.push(str.substring(0, pos))
            arrayReturn.push(str.substring(pos + this.value.length, str.length))
        }
        return arrayReturn
    }
}
//@ts-ignore
console.log(unString.split(new NumeroSplits(" - ", 1)))

// 9 - Symbol.toPrimitive
const miObj = { nombre: "Gorka", nota: 10 }
console.log(miObj)

class Euro {
    value: number
    constructor(v: number) {
        this.value = v
    }

    [Symbol.toPrimitive](hint: "number" | "string" | "default") {
        if (hint === "number") {
            return this.value
        }
        return `${this.value.toFixed(2)} €`
    }
}

const miEuro = new Euro(20)
console.log("Me acabo de comprar unas gafas, y me han costado " + miEuro)
console.log(Number(miEuro) + 5)

// 10 - Symbol.unscopables
const unObjeto = {
    area: 50,
    base: 10,
    altura: 5
}

unObjeto[Symbol.unscopables] = {
    area: false
}

with(unObjeto) {
    console.log(area) // Cannot find area
}

// 11 - Symbol.toStringTag
class AlumnoCustom {
    [Symbol.toStringTag] = "AlumnoReal"
}

const miAlumno = new AlumnoCustom()
console.log(miAlumno.toString())

export {}
