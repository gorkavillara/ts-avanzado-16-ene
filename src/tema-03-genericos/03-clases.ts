const creaSeparador = () => console.log("-------------------")
// Introducción a las clases genéricas

class MiObjetoClasico<Key, Value> {
    key: Key
    value: Value
    constructor(k: Key, v: Value) {
        this.key = k
        this.value = v
    }

    getValue(key: Key): Value | null {
        return this.key === key ? this.value : null
    }
}

const miPrimerObjetoClasico = new MiObjetoClasico("nombre", "Gorka")
const miSegundoObjetoClasico = new MiObjetoClasico("edad", 32)
const miTercerObjetoClasico = new MiObjetoClasico<number, string>(10, "Type-R")

console.log(miPrimerObjetoClasico.getValue("nombre"))
console.log(miPrimerObjetoClasico.getValue("true"))

creaSeparador()
////
class MiCallback<Input> {
    private _callback: (param: Input) => void
    constructor(c: (param: Input) => void) {
        this._callback = c
    }
    hazLaLlamada(input: Input) {
        return this._callback(input)
    }
}

const obtenLongitud = (valor: string) => console.log(valor.length)

const miPrimerCallback = new MiCallback(obtenLongitud)

const miSegundoCallback = new MiCallback<boolean>(obtenLongitud)
// Error porque obtenLongitud no tiene parámetros de tipo boolean

const miTercerCallback = new MiCallback<boolean>((input: boolean) =>
    console.log(input ? "verdadero" : "falso")
)

creaSeparador()
///// Extendiendo clases genéricas
class Poema<T> {
    estrofas: T

    constructor(es: T) {
        this.estrofas = es
    }
}

const poemaHumano = new Poema([
    "Con diez cañones por banda",
    "Viento en popa a toda vela",
    "No corta el mar sino vuela",
    "Un velero bergantín",
])

const poemaRobotico = new Poema([0, 1, 1, 0, 0, 0, 1, 0, 1])

class PoemaRecitado extends Poema<string[]> {
    recita() {
        console.log(this.estrofas.join("\n"))
    }
}

const poemaRecitado = new PoemaRecitado([
    "Cambiaste el Ferrari por un Twingo",
    "Cambiaste el Rolex por un Casio",
])
poemaRecitado.recita()

creaSeparador()
/////// Otro ejemplo
type TipoEscritor = "Humano" | "Robótico"
class PoemaAtribuido<Value> extends Poema<Value> {
    escritor: string
    tipoEscritor: TipoEscritor
    constructor(v: Value, esc: string, tipo: TipoEscritor) {
        super(v)
        this.escritor = esc
        this.tipoEscritor = tipo
    }
}

const miPoemaAtribuido = new PoemaAtribuido([1, 2, 3, 4, 5, "hola"], "GorkaGPT", "Robótico")

miPoemaAtribuido.estrofas.forEach(val => {
    if (typeof val === "number") {
        console.log(val.toFixed(2))
    } else {
        console.log(val.toUpperCase())
    }
})

creaSeparador()
///////////////////
interface Papel<Rol> {
    rol: Rol
}

class MiPapel implements Papel<string> {
    rol: string
    pelicula: string
    constructor(rol: string, pel: string) {
        this.rol = rol
        this.pelicula = pel
    }
}

const miPrimerPapel = new MiPapel("protagonista", "Avatar 2")

class MiOtroPapel implements Papel<boolean> {
    rol: boolean
    constructor(r: boolean) {
        this.rol = r
    }
}

creaSeparador()
// Métodos con valores genéricos
class MiFactoriaDePares<Key> {
    key: Key

    constructor(k: Key) {
        this.key = k
    }

    creaPar<Value>(val: Value) {
        return {
            key: this.key,
            value: val
        }
    }
}

const miFactoria = new MiFactoriaDePares(1)

const primerPar = miFactoria.creaPar("Hola")
const segundoPar = miFactoria.creaPar(false)

console.log(primerPar)
console.log(segundoPar)

const tercerPar = miFactoria.creaPar<number[]>([12, 2, 9, 100])

creaSeparador()

type NombreFigura = "Cuadrado" | "Triángulo" | "Rectángulo" | "Círculo"

class Figura<TipoGenericoEnInstancia> {
    nombre: NombreFigura
    area: number
    constructor(n: NombreFigura, a: number) {
        this.nombre = n
        this.area = a
    }

    quienSoyAgregado(valor: TipoGenericoEnInstancia) {
        console.log(this.nombre)
        console.log(valor)
    }

    static hazLog<TipoGenericoEnEstatico>(valor: TipoGenericoEnEstatico) {
        console.log(valor)
        return valor
    }
}

const miFigura = new Figura("Triángulo", 10)
miFigura.quienSoyAgregado("Hola mundo")

Figura.hazLog(false)
Figura.hazLog<string>("12")

export { creaSeparador }
