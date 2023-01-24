class Coche {
    marca: string
    modelo: string
    cv: number
    constructor(ma: string, mo: string, cv: number) {
        this.marca = ma
        this.modelo = mo
        this.cv = cv
    }
}

// numbarrasav: number
// daleAlNitro()

class Moto {
    marca: string
    cv: number
    constructor(ma: string, cv: number) {
        this.marca = ma
        this.cv = cv
    }
}

type ClassConstructor<T> = new (...args: any[]) => T

function convierteEnCarreras<C extends ClassConstructor<{
    marca: string
    modelo: string
    cv: number
}>>(Clase: C) {
    return class extends Clase {
        numbarrasav = 12
        constructor(...args: any[]) {
            super(...args)
        }
        setNumBarras(nuevoNum: number) {
            this.numbarrasav = nuevoNum
        }
        daleAlNitro() {
            console.log("Brum brum")
        }
    }
}

const CocheCarreras = convierteEnCarreras(Coche)
const miTypeR = new CocheCarreras("Honda", "TypeR", 320)
miTypeR.daleAlNitro()

const MotoCarreras = convierteEnCarreras(Moto)