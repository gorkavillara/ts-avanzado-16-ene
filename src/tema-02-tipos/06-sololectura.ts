class PiezaAjedrez {
    readonly nombre: string
    constructor(n: string) {
        this.nombre = n
    }
    mueve() {
        console.log("La pieza mueve")
    }
}

const miCaballo = new PiezaAjedrez("Caballo")

console.log(miCaballo.nombre)

miCaballo.nombre = "Rey"

console.log(miCaballo.nombre)
