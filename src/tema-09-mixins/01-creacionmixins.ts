// Tipo de constructor de clase que devuelve una clase newable
type ConstructorClase = new (...args: any[]) => {}

function sabeCantar<C extends ConstructorClase>(Clase: C) {
    class ClaseExtendida extends Clase {
        constructor(...args: any[]) {
            super(...args)
        }

        // Aquí ya le podemos añadir funcionalidad extendida
        canta() {
            console.log("Es que yo... soy un truhán, soy un señor\nAmo la vida y amo el amor")
        }
    }
    return ClaseExtendida
}

class Cantante {
    nombre: string
    genero: string
    constructor(n: string, g: string) {
        this.nombre = n
        this.genero = g
    }
}

// const cantante = new Cantante("Julio Iglesias", "Himnos")
const CantanteQueCanta = sabeCantar(Cantante)

const cantante = new CantanteQueCanta("Julio Iglesias", "Himnos")
cantante.canta()